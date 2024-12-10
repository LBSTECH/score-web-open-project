import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

export default function Road(props) {
    const buttonClass = "font-extrabold text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 text-center me-5 ms-5 my-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
    const areaCode = props.code
    const handSetComponent = (cat) => {
        const functionMap = {
            'degree': setDegreeLayer,
            'width': setWidthLayer,
            'road': setRoadLayer,
            'alley': setAlleyLayer,
            'crossing': setCrossingLayer
        };
        const validFunctionNames = ['degree', 'width', 'road', 'alley', 'crossing'];
        let functionName = validFunctionNames.includes(cat) ? cat : null;        
        const functionToCall = functionMap[functionName];
        if (functionToCall) {
            functionToCall(areaCode);
        } else {
            console.error('Invalid function name');
        }
    };
    const setDegreeLayer = () => {
        
    };

    const setWidthLayer = () => {
        // Function implementation
    };

    const setRoadLayer = async (code) => {  
        const response = await axios.get(`http://localhost:3001/api/map/road/roadpath?code=${code}`);
    };

    const setAlleyLayer = async(code) => {
        const response = await axios.get(`http://localhost:3001/api/map/road/alleypath?code=${code}`);
    };

    const setCrossingLayer = async(code) => {
        const response = await axios.get(`http://localhost:3001/api/map/road/corssingpath?code=${code}`);
    };
    return (
        <>
            <div className='flex flex-col mt-10 pt-5'>
                <button type="button" className={buttonClass} onClick={() => handSetComponent('degree')}>경사도</button>
                <button type="button" className={buttonClass} onClick={() => handSetComponent('width')}>보도폭</button>
                <button type="button" className={buttonClass} onClick={() => handSetComponent('road')}>보행전용도로</button>
                <button type="button" className={buttonClass} onClick={() => handSetComponent('alley')}>보차혼용로</button>
                <button type="button" className={buttonClass} onClick={() => handSetComponent('corssing')}>횡단보도</button>
            </div>
        </>
    )
}