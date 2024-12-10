import React from 'react';

export function Sidebar() {
    return (
        <div className="bg-dark-blue text-white w-64 mx-auto absolute right-20" aria-label="Sidebar">
            <div className="p-4">
                <h3 className="text-lg text-center font-semibold">로드스코어 점수</h3>
                <ul className="mt-4 space-y-2">
                    <div className='flex justify-center'>
                        <div className="bg-green-500 p-2 ml-4 rounded-md w-1/6"></div>
                        <div className="w-5/6 text-center">76 - 100 점</div>
                    </div>
                    <div className='flex'>
                        <div className="bg-yellow-500 p-2 ml-4 rounded-md w-1/6"></div>
                        <div className="w-5/6 text-center">51 - 75 점</div>
                    </div>
                    <div className='flex'>
                        <div className="bg-yellow-300 p-2 ml-4 rounded-md w-1/6"></div>
                        <div className="w-5/6 text-center">26 - 50 점</div>
                    </div>
                    <div className='flex'>
                        <div className="bg-yellow-100 p-2 ml-4 rounded-md w-1/6"></div>
                        <div className="w-5/6 text-center">0 - 25점</div>
                    </div>
                </ul>
                <button className="bg-orange-50 text-black p-2 mt-4 w-full rounded-md">평가 단원 모집</button>
                <button className="bg-yellow-400 text-black p-2 mt-2 w-full rounded-md">시민 평가 보기</button>
            </div>
        </div>
    );
}