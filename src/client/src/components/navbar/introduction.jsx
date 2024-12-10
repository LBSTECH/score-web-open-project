import React from 'react'

export function Introduction() {
    return (
        <div className="text-white  flex flex-col justify-center items-center">
            <div className='w-3/6'>
                <div className='mt-40 pl-20 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">로드스코어란?</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '120%' }} />
                    </div>
                </div>
            </div>

            <div className="text-center mb-">
                <h2 className="text-6xl font-bold mb-14">ROAD SCORE</h2>
                <p className="my-9">실시간 보행로의 환경을 정량적 지수로 평가 실제 보행자의 평가를 반영한 시민체감지수 사용자 유형별, 통행 시간별 맞춤형 정보 제공</p>
                <hr className="border-yellow-500 mx-auto mb-14" />
            </div>

            <div className="flex justify-around w-full max-w-4xl mt-4 mb-20">
                <div className="text-center">
                    <h3 className="font-bold text-2xl text-yellow-300 ">보행자 중심 체계 구축</h3>
                    <p className='text-sm'>기존 차량 중심의 도로 체계에서 <br /> 보행자 중심의 기준과 체계를 구축</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl text-yellow-300">보행로 장애물 분류 기준 정립</h3>
                    <p className='text-sm'>보행로 상 장애물의 유형 구분 및 <br /> 체계화를 통한 보행 환경 기준 제시</p>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl text-yellow-300">실시간 보행로 관제 시스템</h3>
                    <p className='text-sm'>보행 환경 정보의 실시간 업데이트를 <br /> 통한 보행로 밀착 관제 구현</p>
                </div>
            </div>


            <div className='w-3/6'>
                <div className='mt-40 pl-20 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">구축 프로세스</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '120%' }} />
                    </div>
                </div>
            </div>

            <div className='my-20'>
                <img src="/images/road-score1.webp" alt="road-score1" className="h-auto w-auto max-w-full" />
            </div>


            <div className='w-3/6'>
                <div className='mt-40 pl-20 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">7Layer</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '120%' }} />
                        <p className='my-5'>
                            보행로를 각 특성에 따라 7단계로 분류하고 분석합니다.<br />
                            분석된 정보를 겹겹이 쌓아 보행정밀지도를 구축합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex mb-80">
                <div className="w-1/2">
                    <img src='/images/road-score2.webp' alt="Layered Diagram" className="w-full h-auto" />
                </div>

                <div className="w-1/2 flex flex-col justify-center">
                    <div className="ml-4">
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 7 - 사용자 경험</h2>
                        <p className="mb-4">사용자 이동경로, 촬영정보 등을 기반으로 한 <br/>시민체감지수 제공</p>
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 6 - 안전, 사고 정보</h2>
                        <p className="mb-4">감염병 , 천재지변 , 파손지역 등 보행안전 <br/>관련 정보 제공</p>
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 5 - 환경, 기상 정보</h2>
                        <p className="mb-4">빙판, 웅덩이, 자외선 등 기상상황에 따른 <br/> 보행환경정보 ​제공</p>
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 4 - 장애물 정보</h2>
                        <p className="mb-4">자전거/킥보드, 불법주정차, 쓰레기, 가판대 등 노면 위<br/> ​인적 요인에 의한 장애물 정보 제공</p>
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 3 - 시설 정보</h2>
                        <p className="mb-4">점자블럭, 음향신호기, 경사로, 보행손잡이, 승강기 등 <br/>​교통약자 이동편의시설 관련정보 제공 </p>
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 2 - 건물 정보</h2>
                        <p className="mb-4">출입문, 입주사, 화장실, 승강기 등 건물 접근성 및 ​이용정보 제공<br/></p>
                        <h2 className="text-xl font-bold mb-2 text-orange-200">Layer 1 - 도로 정보</h2>
                        <p className="mb-4">보행로, 보차혼용로, 자전거도로 등<br/> 도로 유형별 속성 ​구분</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
