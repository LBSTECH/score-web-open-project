import React from 'react'
import { ComponentList } from './ComponentList';
import { ProgressBar } from '../common/ProgressBar';
import { useStore } from '../store/store';

export const SideBarComponent = ({ value}) => {
    const {
        setShowSpinner,
        setScore,
        setText,
        setShowComponentRoadOrAcsble,
        showComponentRoadOrAcsble
    } = useStore(state => state)
    const handleComponentClick = () => {
        setScore(value.score)
        setText(value.text)
        setShowSpinner(true);
        setTimeout(() => {
            setShowSpinner(false);
            setShowComponentRoadOrAcsble(!showComponentRoadOrAcsble);
        }, 500);
    };
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='text-black text-start text-2xl pt-5'>{value.title}
                </div>
                <div className={`px-6 pt-4 pb-2 w-1/4 sidebar-component-hover`} onClick={handleComponentClick}>
                    {value.score && <ProgressBar score={value.score} />}
                </div>
            </div>
            <div className='flex border-t-2 border-t-gray-500 py-7'>
            </div>
            {
                 <ComponentList items={value.items}/>
            }
        </>
    );
};