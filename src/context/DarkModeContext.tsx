import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { themeDark, themeLight } from '../utils/theme';

export const DarkModeContext = createContext({
  isDark: false,
  setDarkMode: (d) => {},
});

export function DarkModeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const setDarkMode = (darkness) => {
    setIsDark(darkness);
    localStorage.setItem('dark-mode', darkness ? 'dark' : 'light');
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentDarkMode = localStorage.getItem('dark-mode');
    if (currentDarkMode) {
      if (currentDarkMode === 'dark') {
        setDarkMode(true);
      }
    } else {
      if (prefersDarkScheme.matches) {
        setDarkMode(true);
      }
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDark, setDarkMode }}>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}
