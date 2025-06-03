import React, { useState, useEffect } from 'react';
import { Products } from './Products';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#121212'; // dark
      document.body.style.color = '#ffffff';           // optional text color
    } else {
      document.body.style.backgroundColor = '#ffffff'; // light
      document.body.style.color = '#000000';           // optional text color
    }
  }, [darkMode]);

  return (
    <div className="p-4 text-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: '10px 20px',
          marginTop: '10px',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#fff' : '#333',
          color: darkMode ? '#000' : '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Change Thim
      </button>
    </div>
  );
};

export default DarkModeToggle;
