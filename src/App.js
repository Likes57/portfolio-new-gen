import React from 'react';
import Dropdown from './component/Dropdown';

export default function App(){
  const options = [
    { value: '1', label: 'Перший варіант' },
    { value: '2', label: 'Другий варіант' },
    { value: '3', label: 'Третій варіант' },
  ];

  return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Dropdown label="Мій Dropdown" options={options} />
      </div>
  );
}
