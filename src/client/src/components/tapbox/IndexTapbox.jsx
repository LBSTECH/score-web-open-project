import React, { useEffect } from 'react';
import './MapBoxSideBar.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { TapBoxDtl } from './TapBoxDtl';
import { Article } from './Articel';
import { useStore } from '../store/store'

export function IndexTapbox() {
    const {
        showTapBox,
        isInitialRender,
        showComponentRoadOrAcsble,
        setShowTapBox,
        setIsInitialRender,
    } = useStore(state => state);
    useEffect(() => {
        const timer = setTimeout(() => setIsInitialRender(false), 50);
        return () => clearTimeout(timer);
    }, []);
    const toggleSidebar = () => {
        setShowTapBox(!showTapBox);
    };
    const sidebarClasses = showTapBox
        ? `absolute pt-40 top-0 left-0 z-10 h-screen w-1/5 opacity-80 bg-slate-50 shadow-lg transition-transform duration-500 ease-in-out ${isInitialRender ? '-translate-x-full' : ''}`
        : "absolute pt-40 top-0 left-0 z-10 h-screen w-1/5 opacity-80 bg-slate-50 shadow-lg transition-transform duration-500 ease-in-out -translate-x-full";
    const toggleButtonClasses = "absolute mb-5 text-black bg-white p-2 rounded-full shadow-lg cursor-pointer z-20 transition-transform duration-500 ease-in-out";
    return (
        <>
            {!showComponentRoadOrAcsble ? (
                <Article sidebarClasses={sidebarClasses} />
            ) : (
                <TapBoxDtl sidebarClasses={sidebarClasses} />
            )}
            <div
                className={`${toggleButtonClasses} ${showTapBox ? 'left-[20%]' : 'left-0 transform -translate-x-full'}`}
                onClick={toggleSidebar}
                style={{ transform: `translateY(-50%) ${showTapBox ? '' : 'translateX(100%)'}` }}
            >
                {showTapBox ? (
                    <ChevronRightIcon className="h-5 w-5 text-gray-800" />
                ) : (
                    <ChevronLeftIcon className="h-5 w-5 text-gray-800" />
                )}
            </div>
        </>
    );
}
