import React from 'react';
import { DarkModeContextProvider } from '../context/DarkModeContext';

export function RootLayout({ children }) {
  return (
    <>
      <DarkModeContextProvider>{children}</DarkModeContextProvider>
    </>
  );
}
