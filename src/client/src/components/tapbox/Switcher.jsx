import React from 'react';
import { useStore } from '../store/store';
const Switcher = ({ onToggle }) => {
    const{
        selectedType,
        isState,
        setIsState,
        isBuild,
        setIsBuild,
    } = useStore(state => state);

    const { item1, item2 } = (() => {
        if (selectedType === 'road') {
            return { item1: '상태', item2: '상황' };
        } else if (selectedType === 'acsble') {
            return { item1: '건물', item2: '매장' };
        }
    })();

    const switchToogel = () => {
        setIsState(!isState)
        setIsBuild(!isBuild)
    }
    return (
        <div className='w-full shadow-card mb-8 relative select-none cursor-pointer rounded-3xl overflow-hidden'>
            <input
                type='checkbox'
                className='sr-only'
                id='switch-checkbox'
                checked={isState}
                onChange={switchToogel}
            />
            <label
                htmlFor='switch-checkbox'
                className='flex w-full h-10 bg-gray-500 rounded-md'
                style={{ transition: 'background-color 0.3s ease' }}
            >
                <div className={`flex items-center justify-center w-1/2 h-full cursor-pointer text-gray-200 font-bold text-lg transition-all duration-300 ease-in-out ${isState ? 'bg-blue-600' : 'bg-gray-700'}`}>
                    {item1}
                </div>
                <div className={`flex items-center justify-center w-1/2 h-full cursor-pointer text-white font-bold text-lg transition-all duration-300 ease-in-out ${isState ? 'bg-gray-700' : 'bg-blue-600'}`}>
                    {item2}
                </div>
            </label>
        </div>
    );
};

export default Switcher;
