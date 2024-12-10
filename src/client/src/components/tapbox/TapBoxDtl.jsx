import React from 'react';
import Switcher from './Switcher';
import { Spinner } from '../common/Spinner';
import { SideBarComponent } from './SideBarComponent';
import ComponentData from './ComponentListData.json';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useStore } from '../store/store';
import { Component } from './Component';
//보행로 또는 접근성이 눌렸을때 보여지는 컴포넌트
export const TapBoxDtl = ({ sidebarClasses }) => {
    const tapBoxDtlCss = sidebarClasses.replace('pt-56', 'pt-40');
    const {
        showSpinner,
        isState,
        isBuild,
        showDtl,
        showComponentDtl,
        selectedType,
        selectedArea,
        showComponentList,
        setShowComponentDtl,
        setShowComponentRoadOrAcsble,
        showComponentRoadOrAcsble
    } = useStore(state => state);
    const component = ComponentData.filter(item => item.component === selectedType)[0];
    const filteredDataRoadAndAcs = isState ?
        component.data.filter(item => item.att === 'status') :
        component.data.filter(item => item.att === 'conditions')
    const filterDataBuildAndPoi = isBuild ?
        component.data.filter(item => item.att === 'build') :
        component.data.filter(item => item.att === 'poi')
    console.log(`selected area is ${selectedArea.entrc}`);
    const ItemList = () => {
        return (
            <div className=' overflow-auto'>
                <div className="px-6 py-4">
                    {!showDtl && !showSpinner ?
                        <Switcher /> :
                        null}
                    {showSpinner && <Spinner />}
                </div>
                <div className='flex-grow flex flex-col p-4 font-bold overflow-auto'>
                    {
                        selectedType === 'road' ?
                            filteredDataRoadAndAcs.map((item, index) => (
                                <SideBarComponent key={index} value={{ title: item.type, score: 41, items: item.titles }} />
                            ))
                            :
                            filterDataBuildAndPoi.map((item, index) => (
                                <SideBarComponent key={index} value={{ title: item.type, score: selectedArea.entrc, items: item.titles }} />
                            ))
                    }
                </div>
            </div>
        )
    }
    return (
        <div className={tapBoxDtlCss} >
            <div className='flex pl-9'>
                <button
                    onClick={() => {
                        if(showComponentRoadOrAcsble&&showComponentList&&!showComponentDtl){
                            setShowComponentRoadOrAcsble(!showComponentRoadOrAcsble);
                        }else if(showComponentRoadOrAcsble&&showComponentList&&showComponentDtl){
                            setShowComponentDtl(!showComponentDtl)
                        }
                    }}
                    className="h-6 w-6 text-gray-800 transition duration-150 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>

            </div>
            <div className="flex flex-col h-full">
                <div className='flex justify-center items-center space-x-4 px-4 pb-2'>
                    <h2 className='text-center font-bold text-3xl'>
                        {selectedArea.sgg2}
                    </h2>
                    <h4 className='font-bold'>
                        {selectedArea.score}점
                    </h4>
                </div>
                {showComponentRoadOrAcsble && showComponentList && !showComponentDtl? <ItemList /> :
                 showComponentRoadOrAcsble && showComponentList && showComponentDtl? <Component /> :
                 null
                }
            </div>
        </div>
    );
};