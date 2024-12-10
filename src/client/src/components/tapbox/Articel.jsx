import React from 'react';
import { useStore } from '../store/store';
//가장 처음화면
export const Article = ({ sidebarClasses }) => {
    const { selectedArea, setSelectedType, setShowComponentRoadOrAcsble, showComponentRoadOrAcsble } = useStore(state => state);
    const handleClick = (type) => {
        setSelectedType(type); 
        setShowComponentRoadOrAcsble(!showComponentRoadOrAcsble);
    };
    
    return (
        <>
            <div className={sidebarClasses}>
                <div className='flex justify-center items-center'>
                    <h2 className='text-center font-bold text-3xl'>
                        {selectedArea.sgg2}
                    </h2>
                    <h4 className='p-4 font-bold'>
                        {selectedArea.score}점
                    </h4>
                </div>
                <div className='flex justify-center items-around h-4/6'>
                    <div className='flex flex-col justify-around items-around'>
                        <button
                            type='button'
                            onClick={() => handleClick('road')}
                        >
                            <img className='transform transition duration-300 ease-in-out hover:scale-105' src="/images/road-score60.png" alt="Road Score 60" />
                            <div className='text-2xl font-bold'>보행로</div>
                        </button>
                        <button
                            type='button'
                            onClick={() => handleClick('acsble')}
                        >
                            <img className='transform transition duration-300 ease-in-out hover:scale-105 ' src="/images/road-score59.png" alt="Road Score 59" />
                            <div className='text-2xl font-bold'>접근성</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}