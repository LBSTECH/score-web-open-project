import React, { useEffect, useState } from 'react';
import { Sidebar } from './side';
import { Link } from 'react-router-dom';
import axios from 'axios';
export function Isometric() {
    const domain = process.env.REACT_APP_API_URL;
    const [data, setData] = useState([]);
    useEffect(() => {
        async function init() {
            try {
                const response = await axios.get(domain+'/init/area');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        init();
    }, []);
    const component = (sgg2, score, index, idx_area) => {
        const color = score >= 76 ? 'green' :
            score >= 51 ? 'orange' :
                score >= 26 ? 'apricot' : 'white';
        const obj = data.find(v => v.idx_area === idx_area);
        return (
            <div key={index} className="relative flex px-1 nodrag" >
                <img src={`/${color}.png`} alt="" className="w-full h-48 object-cover" style={{ transform: 'rotate(-45deg)' }} />
                <div className="absolute font-bold z-20 text-black text-xl pb-4 top-1/2 left-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
                    <Link to={`/map/base`} state={obj} className="cursor-pointer p-4 text-lg">
                        {sgg2}
                    </Link>
                </div>
            </div>
        );
    };
    return (
        <div className="text-white flex justify-center items-center w-full min-h-screen px-4 py-12">
            <div className='max-w-screen-lg mx-auto overflow-hidden relative my-12'>
                {data.length > 0 && (
                    <>
                        <div className='flex flex-nowrap justify-center -mb-28 '>
                            {data.slice(0, 5).map((item, index) =>
                                component(item.sgg2, item.score, index, item.idx_area))}
                        </div>
                        <div className='flex flex-nowrap justify-center -mb-28 mx-5 '>
                            {data.slice(5, 9).map((item, index) =>
                                component(item.sgg2, item.score, index, item.idx_area))}
                        </div>
                        <div className='flex flex-nowrap -mb-32 justify-center '>
                            {data.slice(9, 14).map((item, index) =>
                                component(item.sgg2, item.score, index, item.idx_area))}
                        </div>
                        <div className='flex'>
                            <img src="/images/river2.png" alt="" className='' />
                        </div>
                        <div className='flex flex-nowrap -mb-20 -mt-28 mx-5 justify-center '>
                            {data.slice(14, 18).map((item, index) =>
                                component(item.sgg2, item.score, index, item.idx_area))}
                        </div>
                        <div className='flex flex-nowrap -mb-20 mx-5 justify-center '>
                            {data.slice(18, 23).map((item, index) =>
                                component(item.sgg2, item.score, index, item.idx_area))}
                        </div>
                        <div className='flex flex-nowrap mx-5 justify-center '>
                            {data.slice(23, 25).map((item, index) =>
                                component(item.sgg2, item.score, index, item.idx_area))}
                        </div>
                    </>
                )}
            </div>
            <Sidebar />
        </div>
    );
}
