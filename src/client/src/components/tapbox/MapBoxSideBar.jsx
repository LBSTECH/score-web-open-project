import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import './MapBoxSideBar.css';
import { MapBoxSideBarDtl } from './MapBoxSideBarDtl';
import { Spinner } from '../common/Spinner';
import { ProgressBar } from '../common/ProgressBar';
import Switcher from './Switcher';

export function MapBoxSideBar(props) {
  const [score, setScore] = useState(0);
  const [text, setText] = useState('');
  const [isRoad, setIsRoad] = useState(props.selectedType);
  const [showDtl, setShowDtl] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const { sgg2, idx_area } = props
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleBack = () => {
    setShowDtl(false);
  };
  const Component = () => {
    if (isRoad)
      return (
        <div className='flex flex-wrap main font-bold'>
          <SideBarComponent value={{ text: '보행로', score: 80 }} />
          <SideBarComponent value={{ text: '보행시설', score: 92 }} />
          <SideBarComponent value={{ text: '가로시설', score: 77 }} />
          <SideBarComponent value={{ text: '장애물', score: 42 }} />
          <SideBarComponent value={{ text: '보행혼잡도', score: 75 }} />
          <SideBarComponent value={{ text: '날씨', score: 50 }} />
        </div>
      );
    else return (
      <div className='flex flex-wrap main font-bold '>
        <SideBarComponent value={{ text: '화장실', score: 80 }} />
        <SideBarComponent value={{ text: '출입문', score: 43 }} />
      </div>
    )
  }

  const SideBarComponent = (({ value }) => {
    const handleComponentClick = () => {
      setScore(value.score)
      setText(value.text)
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
        setShowDtl(true);
      }, 500);
    };
    return (
      <div className={`px-6 pt-4 pb-2 w-1/2 sidebar-component-hover`} onClick={handleComponentClick}>
        {value.score && <ProgressBar score={value.score} />}
        <div className='text-black text-center text-2xl py-5'>{value.text}</div>
      </div>
    );
  });

  const sidebarClasses = isOpen
    ? "absolute top-0 left-0 z-10 h-screen w-1/5 opacity-80 bg-slate-50 shadow-lg transition-transform duration-500 ease-in-out "
    : "absolute top-0 left-0 z-10 h-screen w-1/5 opacity-80 bg-slate-50 shadow-lg transition-transform duration-500 ease-in-out -translate-x-full";
  const toggleButtonClasses = "absolute mb-5 text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-20 transition-transform duration-500 ease-in-out";
  const backButtonClasses = "absolute top-0 left-0 text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-20 flex items-center justify-center";
  return (
    <>
      {showDtl && isOpen ?
        <button
          className={backButtonClasses}
          onClick={handleBack}
          style={{ marginTop: '10px', marginLeft: '10px' }}
        >
          <span style={{ marginRight: '5px' }}>←</span>
        </button>
        : null
      }
      <div className={sidebarClasses}>
        <div className="px-6 py-4">

          {!showDtl && !showSpinner ? <Switcher isChecked={isRoad} onToggle={() => setIsRoad(!isRoad)} /> : null}
        </div>
        {showSpinner && <Spinner />}
        {!showSpinner && (showDtl ? <MapBoxSideBarDtl score={score} text={text} code={props.code} /> : <Component />)}
      </div>
      <div
        className={`${toggleButtonClasses} ${isOpen ? 'left-[20%]' : 'left-0 transform -translate-x-full'}`}
        onClick={toggleSidebar}
        style={{ transform: `translateY(-50%) ${isOpen ? '' : 'translateX(100%)'}` }}
      >
        {isOpen ? '〈' : '〉'}
      </div>
    </>
  );
}
export function getColor(score) {
  if (score >= 80) return '#00CC66';
  if (score >= 60) return '#EECE60';
  return '#FF9999';
}