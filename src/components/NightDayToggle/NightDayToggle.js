import React from 'react';

import './style.css';

export const NightDayToggle = ({ checked, onChange }) => {
  return (
    <div className='toggle'>
      <label className='visually-hidden' htmlFor='dark-toggle'>
        Toggle between dark and light mode
      </label>
      <input
        id='dark-toggle'
        className='toggle-input'
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <div className='toggle-bg'></div>
      <div className='toggle-switch'>
        <div className='toggle-switch-figure'></div>
        <div className='toggle-switch-figureAlt'></div>
      </div>
    </div>
  );
};
