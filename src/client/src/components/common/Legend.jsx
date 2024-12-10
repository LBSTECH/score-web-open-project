import React from 'react';

const legendData = [
  { label: '76점 ~ 100점', color: '#33FF33' },
  { label: '51점 ~ 75점', color: '#FFFF00' },
  { label: '26점 ~ 50점', color: '#FF6600' },
  { label: '0점 ~ 25점', color: '#999999' }
];

const Legend = () => {
  return (
    <div className="absolute z-10 bottom-24 right-32 p-4 shadow-lg">
      {legendData.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <span className={`w-14 h-14 mr-2 text-black`} style={{backgroundColor : item.color}}></span>
          <span className="text-sm font-bold text-black">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
