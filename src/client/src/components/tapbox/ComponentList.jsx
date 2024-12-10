import React from 'react';
import { useStore } from '../store/store';
//컴포넌트들의 리스트
export const ComponentList = ({ items }) => {
  const {
    setShowComponentDtl,
    showComponentDtl,
  } = useStore(state => state);
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 cursor-pointer transition duration-150 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-50"
          onClick={() => {
            setShowComponentDtl(!showComponentDtl)
          }}>
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <p className="text-gray-600">{item.score}</p>
        </div>
      ))}
    </div>
  );
};
