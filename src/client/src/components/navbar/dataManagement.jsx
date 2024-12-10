import React from 'react'

export function DataManagement() {
    return (
        <div className="text-white  flex flex-col justify-center items-center">
            <div className='w-3/6'>
                <div className='mt-40 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">보행로데이터</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '120%' }} />
                    </div>
                </div>

                <div className='flex justify-around'>
                    <img src="/images/road-score28.webp" alt="" />
                    <img src="/images/road-score29.webp" alt="" />
                    <img src="/images/road-score30.webp" alt="" />
                </div>
                <div className='flex justify-around my-10'>
                    <h2 className='text-2xl'>경사도</h2>
                    <h2 className='text-2xl'>보폭도</h2>
                    <h2 className='text-2xl'>평탄도</h2>
                </div>
                <p>
                    보행로 상태 정보를 경사도, 보도폭, 평탄도 3가지로 분류하여 관리합니다. <br />
                    경사도는 수치표고모형, 보도폭은 연속수치지형도의 인도 폭 데이터, 연속수치지형도의 인도 재질 데이터와 로드스캐너의 보행로 유/손실 <br />
                    데이터를 기반으로 ​수집합니다. 이렇게 수집된 데이터는 설정된 기준에 따라 보행로 점수를 산출합니다. <br />
                </p>
                <hr className="border-b-2 border-white-500 my-20" />
                <p>
                    경사도는 진행방향으로의 경사의 정도를 말하는 것으로, 경사도가 낮을수록 높은 점수를 부여합니다.
                </p>
                <div className="p-6 text-white mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className='flex justify-around'>
                            <h2 className="font-bold text-xl mb-2">경사도 점수</h2>
                            <div>
                                <p>0 point 건전도 4.8 * 초과</p>
                                <p>50 point 건전도 2.4 * 이상 4.8 * 미만</p>
                                <p>100 point 건전도 2.4 * 미만</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>
                    보폭도는 실제 보도 폭 중 시설물의 점용구역을 제외한 유효 폭을 말하는 것으로, 폭이 넓을 수록 높은 점수를 부여합니다.
                </p>
                <div className="p-6 text-white mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className='flex justify-around'>
                            <h2 className="font-bold text-xl mb-2">보폭도 점수</h2>
                            <div>
                                <p>0 점 유동폭 1m 미만</p>
                                <p>50점 유동폭 1m 이상 2m 미만</p>
                                <p>100점 유동폭 2m 이상</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>
                    평탄도는 보도의 평평한 정도를 말하는 것으로, 파손/유실/돌출 등으로 인한 변형이 일어난 보도블록 유닛의 비율이 낮을 수록 높은 점수를 부여합니다.
                </p>
                <div className="p-6 text-white mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className='flex justify-around'>
                            <h2 className="font-bold text-xl mb-2">평탄도 점수</h2>
                            <div>
                                <p>0 점 평탄도 80% 미만</p>
                                <p>50점 평탄도 80% 초과 96% 이하</p>
                                <p>100점 평탄도 96% 이상</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white p-6">
                    <h2 className='text-2xl my-10 italic'>
                        보행량 링크 점수 (R<sub>ls</sub>)
                    </h2>
                    <p className='mb-10'>
                        = (건전도 점수) x (건전도 가중치) + (보행도 점수) x (보행도 가중치) + (평탄도 점수) x (평탄도 가중치)
                    </p>
                    <p>
                        R<sub>ls</sub> = G<sub>ls</sub> x G<sub>i</sub> + B<sub>ls</sub> x B<sub>i</sub> + S<sub>ls</sub> x S<sub>i</sub>,
                    </p>
                    <p className='mb-10'>
                        G<sub>i</sub> = 0.4, B<sub>i</sub> = 0.4, S<sub>i</sub> = 0.2
                    </p>

                    <h2 className='text-2xl my-10'>
                        보행량 점수 (R<sub>ts</sub>)
                    </h2>
                    <p class="mb-4 border-b w-1/3 pl-8">(링크 보행로 점수) x (해당 링크의 길이) 의 합</p>
                    <p class="mb-6 pl-28">(총 링크의 길이)</p>
                    <p className='italic'>R<sub>ts</sub> = ΣR<sub>ls</sub> x (Length of the link)</p>
                    <p className='italic'>Total length of link</p>
                </div>

                <div className='mt-40 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">장애물 데이터</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '170%' }} />
                    </div>
                </div>
                <div className='flex justify-around'>
                    <img src="/images/road-score31.webp" alt="road-score31" />
                    <img src="/images/road-score32.webp" alt="road-score32" />
                    <img src="/images/road-score33.webp" alt="road-score33" />
                </div>
                <div className='flex justify-around my-10'>
                    <h2 className='text-2xl'>이동장애물</h2>
                    <h2 className='text-2xl'>보행시설물</h2>
                    <h2 className='text-2xl'>가로시설물</h2>
                </div>
                <p className='mb-20'>
                    보행로 상의 장애물 등 다양한 요소를 장애물, 보행시설물, 가로시설물 3가지로 분류하여 관리합니다.<br />
                    장애물은 보도 상의 무단 적치물을 로드스캐너의 이동 방해물 데이터, 보행시설물은 점자블록 등과 같이 교통약자의 보행을 보조하는<br />
                    시설을 각종 공공데이터, 가로시설물은 보도 상에 설치된 환경 혹은 안전 등을 위한 시설을 연속수치지형도의 각종 데이터를 기반으로 수집합니다.<br />
                    수집된 장애물 데이터는 장애물 점수 산출에 활용되고, 보행 시설물과 가로시설물은 보행시설정보 제공, 보행로 점수 산출 등에 활용됩니다.
                </p>
                <hr className="border-b-2 border-white-500 my-20" />

                <div className="text-white mb-20 p-6 ">
                    <h2 className='text-2xl my-10 italic'>
                        장애물 링크 점수 (O<sub>ls</sub>)
                    </h2>
                    <p className='mb-10 italic'>
                        = 100 - {'{'}(각 장애물의 상수) X (각 장애물의 개체 수) 의 합{'}'}
                    </p>
                    <p className='italic'>
                        O<sub>ls</sub> = Σ{'{'}(the number of obstacle) X (constant of obstacle){'}'}
                    </p>
                    <h2 className='text-2xl my-10'>
                        장애물 점수 (O<sub>ts</sub>)
                    </h2>
                    <p class="mb-4 border-b w-1/3 pl-8">{'{'}(링크 장애물 점수) x (해당 링크의 길이) 의 합{'}'}</p>
                    <p class="mb-6 pl-28">(총 링크의 길이)</p>
                    <p className='italic'>O<sub>ts</sub> = ΣO<sub>ls</sub> x (Length of the link)</p>
                    <p className='italic'>Total length of link</p>
                </div>

                <div className='mt-40 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">날씨 데이터</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '170%' }} />
                    </div>
                </div>
                <div className='flex justify-around'>
                    <img src="/images/road-score34.webp" alt="road-score34" />
                    <img src="/images/road-score35.webp" alt="road-score35" />
                    <img src="/images/road-score36.webp" alt="road-score36" />
                </div>
                <div className='flex justify-around my-10'>
                    <h2 className='text-2xl'>침수</h2>
                    <h2 className='text-2xl'>결빙</h2>
                    <h2 className='text-2xl'>자외선</h2>
                </div>
                <p className='mb-20'>
                    날씨 데이터는 기상상황에 따라 보행환경을 변화시키는 요소를 빙판, 웅덩이, 자외선 지수 3가지로 분류하고 관리합니다.<br />
                    침수, 결빙 정보는 보행로 상에 생기는 웅덩이나 빙판 등에 대한 실시간 정보를 로드스캐너의 환경 장애물, 자외선 지수는 기상청의 생활<br />
                    기상지수 데이터를 기반으로 ​수집합니다. 이렇게 수집한 데이터를 활용해 날씨 점수를 산출합니다.
                </p>
                <hr className="border-b-2 border-white-500 my-20" />
                <p>
                    결빙 / 침수는 보행로 상의 빙판이나 웅덩이를 말하며, 계절별 발생 빈도에 따라 점수가 산정됩니다.
                </p>
                <div className="p-6 text-white mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className='flex justify-around'>
                            <h2 className="font-bold text-xl mb-2">​결빙 / 침수 점수</h2>
                            <div>
                                <p>0 점 누적 신고 횟수 5회 이상</p>
                                <p>50 점 누적 신고 횟수 3회 이상 5회 미만</p>
                                <p>100 점 누적 신고 횟수 3회 미만</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>
                    자외선은 기상청의 생활기상지수를 기준으로 점수가 산정됩니다.
                </p>
                <div className="p-6 text-white mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div className='flex justify-around'>
                            <h2 className="font-bold text-xl mb-2">자외선 점수</h2>
                            <div>
                                <p>0 점 위험 단계 발효 시</p>
                                <p>25점 매우 높음 단계 발효 시</p>
                                <p>50점 높음 단계 발효 시</p>
                                <p>75점 보통 단계 발효 시</p>
                                <p>100점 낮음 단계 발효 시</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white mb-20 p-6 ">
                    <h2 className='text-2xl my-10 italic'>
                        날씨 링크 점수 (W<sub>ls</sub>)
                    </h2>
                    <p className='mb-10 italic'>
                        = (결빙 점수) X (결빙 가중치) + (침수 점수) X (침수 가중치) + (자외선 점수) X (자외선 가중치) <br />
                        W<sub>ls</sub> = IC<sub>ls</sub> X IC<sub>i</sub> + PD<sub>ls</sub> X PD<sub>i</sub> + UV<sub>ls</sub> X UV<sub>i</sub> <br />
                        IC<sub>i</sub> = 0.4 , PD<sub>i</sub> = 0.35 , UV<sub>i</sub> = 0.25
                    </p>
                    <h2 className='text-2xl my-10 italic'>
                        날씨 점수 (O<sub>ts</sub>)
                    </h2>
                    <p class="mb-4 border-b w-1/3 pl-8">{'{'}(링크 날씨 점수) x (해당 링크의 길이) 의 합{'}'}</p>
                    <p class="mb-6 pl-28">(총 링크의 길이)</p>
                    <p className='italic'>W<sub>ts</sub> = ΣW<sub>ㅅs</sub> x (Length of the link)</p>
                    <p className='italic'>Total length of link</p>
                </div>

                <div className='mt-40 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">혼잡도 데이터</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '170%' }} />
                    </div>
                </div>
                <div className='flex justify-around'>
                    <img src="/images/road-score37.webp" alt="road-score37" />
                    <img src="/images/road-score38.webp" alt="road-score38" />
                    <img src="/images/road-score39.webp" alt="road-score39" />
                </div>
                <div className='flex justify-around my-10'>
                    <h2 className='text-2xl'>여유</h2>
                    <h2 className='text-2xl'>보통</h2>
                    <h2 className='text-2xl'>혼잡</h2>
                </div>
                <p className='mb-20'>
                    보행로의 혼잡한 정도를 여유, 보통, 혼잡 3단계로 분류하고 관리합니다.<br />
                    혼잡도 정보는 로드스캐너를 기반으로 아침, 점심, 저녁, 심야 시간대 별 사진과 영상 정보를 수집합니다.<br />
                    수집된 혼잡도 정보를 활용해 시계열에 따른 혼잡도 정보를 분석 및 예측하여 제공합니다.
                </p>
                <hr className="border-b-2 border-white-500 my-20" />

                <h2 className='text-xl'>
                    보행혼잡도 (C)
                </h2>
                <p className='mb-5'>
                    = (1분 당 구간을 통과하거나 머무른 보행자의 수) / (해당 보행로의 유효 폭)
                </p>
                <p className='mb-16'>
                    C = (Pedestrians on the road per minute) / (effective breadth of the road in m)
                </p>
                <div className="flex flex-row items-center">
                    <span className="text-2xl mr-4">C =</span>

                    <div className="border-r-4 border-white pr-4 mr-4">
                        <div className="mb-2">&nbsp;</div> 
                        <div className="mb-2">&nbsp;</div> 
                        <div className="mb-2">&nbsp;</div>
                    </div>

                    <div>
                        <p className="mb-2">관심 (if C&lt;9)</p>
                        <p className="mb-2">보통 (if 9≤C&lt;18)</p>
                        <p className="mb-2">중점 (if C≥18)</p>
                    </div>
                </div>

                <div className='mt-40 mb-20 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">점수 산정 예시</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '170%' }} />
                    </div>
                </div>
                <img src="/images/road-score40.webp" alt="" className='w-1/3' />
                <p className='my-16'>
                    ex) 경사도 3.1˚ / 폭 1.4m / 평탄도 100%일때, 도로가 이 조건을 갖는다면, <br />
                    경사도 점수 = 50점, 폭점수 = 50점, 평탄도 점수 = 100점으로 보행로 점수는 60점 입니다.
                </p>
                <p className='mb-20'>
                    장애물점수는 입간판과 킥보드가 각 1개씩 있어 91점 입니다. <br />
                    따라서, 결빙/침수 제보가 없고, 자외선 지수가 보통이라면 날씨 점수가 <br />
                    94점이므로, 해당 도로의 보행환경점수는 77점입니다.
                </p>
            </div>
        </div>
    );
}
