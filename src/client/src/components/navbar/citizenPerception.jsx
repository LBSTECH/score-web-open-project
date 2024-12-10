import React from 'react'

export function CitizenPerception() {
    const ScoreCard = ({ score, description, borderColor, bgColor }) => {
        return (
            <div className={`flex justify-center items-center m-4 p-4 border-2 rounded-lg ${borderColor} ${bgColor}`}>
                <div className="text-center">
                    <div className="text-sm">사용자 제한 지수</div>
                    <div className={`text-4xl font-bold ${score < 50 ? 'text-red-500' : 'text-green-500'}`}>{score}</div>
                    <div className="text-xs mt-2">{description}</div>
                </div>
            </div>
        );
    };
    return (
        <div className="text-white  flex flex-col justify-center items-center">
            {/* Title Section */}
            <div className='w-3/6'>
                <div className='mt-40 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">시민체감지수</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '120%' }} />
                    </div>
                </div>
                <div className='mb-12'>
                    <span className='text-2xl font-bold '>
                        <span className='text-yellow-500 '>시민체감지수</span>는 시민과 함께 만들어갑니다.
                    </span>
                </div>
                <p className='mb-12'>
                    보행약자의 유형, 성향에 따라 다르게 느낄 수 있는 보행환경을 다양한 기관 및 단체를 통해 비장애인 뿐만 아니라<br />
                    시각, 지체장애인분들과 함께 시민평가단을 구성합니다.<br />
                    모집된 시민평가단은 해당 지역을 직접 보행하고 느낀 바를 설문을 통해 시민체감지수를 구축해 나갑니다.
                </p>
                <div className='mt-40 mb-28 w-full flex justify-start'>
                    <div className="text-left">
                        <h1 className="text-4xl mb-2 inline-block">설문조사 프로세스</h1>
                        <hr className="border-b-2 border-white-500 w-full" style={{ width: '170%' }} />
                    </div>
                </div>
                <span className='text-2xl font-bold'>
                    {'모집 < 사전 교육 < 사전 설문 <  실증테스트 < 사후 설문'}
                </span>
                <div className="flex items-center justify-around my-20">
                    <button className="bg-yellow-400 text-black text-lg font-medium py-5 px-12 rounded focus:outline-none focus:ring transition duration-150 ease-in-out"><b>시작하세요</b></button>
                    <div className="border-r border-dotted border-white h-40 mx-4"></div>
                    <button className="bg-yellow-400 text-black text-lg font-medium py-5 px-12 rounded focus:outline-none focus:ring transition duration-150 ease-in-out"><b>지체하세요</b></button>
                    <div className="border-r border-dotted border-white h-40 mx-4"></div>
                    <button className="bg-yellow-400 text-black text-lg font-medium py-5 px-12 rounded focus:outline-none focus:ring transition duration-150 ease-in-out"><b>바쁘세요</b></button>
                </div>
                <div className='flex justify-around'>
                    <img src="/images/road-score41.webp" alt="road-score41" />
                    <img src="/images/road-score42.webp" alt="road-score42" />
                    <img src="/images/road-score43.webp" alt="road-score43" />
                    <img src="/images/road-score44.webp" alt="road-score44" />
                    <img src="/images/road-score45.webp" alt="road-score45" />
                </div>
                <p className='text-center my-20'>
                    엘비에스테크는 기업의 CSR 활동의 일환으로 시각장애인 / 지체장애인 / 비장애인 참여자들을 모집하고 만납니다.
                </p>

                <div className="relative my-20">
                    <div className="absolute left-1/3 border-r border-dotted border-white h-full"></div>
                    <div className="absolute right-1/3 border-r border-dotted border-white h-full"></div>

                    <div className='flex items-center justify-around'>
                        <div className="text-center"> 
                            <img src="/images/road-score46.webp" alt="road-score46" />
                            <p className="text-white mt-2">
                                시각장애인을 대상으로 사전 교육을<br />
                                진행하여 장애인과 보행로<br />
                                인식 개선 활동을 이어 나갑니다.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score47.webp" alt="road-score47" />
                            <p className="text-white mt-2">
                                지체장애인을 대상으로 사전 교육을<br />
                                진행하여 장애인과 보행로<br />
                                인식 개선 활동을 이어 나갑니다.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score48.webp" alt="road-score48" />
                            <p className="text-white mt-2">
                                실증테스트 이전에 사전교육을<br />
                                진행하여 장애인과 보행로<br />
                                인식 개선 활동을 이어나갑니다.
                            </p>
                        </div>
                    </div>

                    <div className="h-40"></div>

                    <div className='flex items-center justify-around'>
                        <div className="text-center">
                            <img src="/images/road-score49.webp" alt="road-score49" />
                            <p className="text-white mt-2">
                                수집 과정에 들어가기 앞서<br />
                                참여자의 기초 정보에<br />
                                관한 사전 설문을 진행합니다.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score50.webp" alt="road-score50" />
                            <p className="text-white mt-2">
                                실증테스트에 들어가기 앞서<br />
                                참여자의 기초 정보에<br />
                                관한 사전 설문을 진행합니다.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score51.webp" alt="road-score51" />
                            <p className="text-white mt-2">
                                실증테스트를 들어가기에 앞서<br />
                                평소 참여자의 보행환경<br />
                                및 실태에 대한 사전 설문을 진행합니다.
                            </p>
                        </div>
                    </div>

                    <div className="h-40"></div>
                    <div className='flex items-center justify-around'>
                        <div className="text-center">
                            <img src="/images/road-score52.webp" alt="road-score49" />
                            <p className="text-white mt-2">
                                시각장애인 내비게이션 G-EYE를<br />
                                활용하여 ​앱 사용성<br />
                                및 보행 환경을 경험합니다.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score53.webp" alt="road-score50" />
                            <p className="text-white mt-2">
                                지체장애인 내비게이션 WheelVi를<br />
                                활용하여 ​앱 사용성<br />
                                및 보행 환경을 경험합니다.
                            </p>
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score54.webp" alt="road-score51" />
                            <p className="text-white mt-2">
                                로드스캐너 앱을 활용하여<br />
                                보행로 정보 수집 활동에<br />
                                참여하고 보행 환경 개선에 앞장섭니다.
                            </p>
                        </div>
                    </div>

                    <div className="h-40"></div>
                    <div className='flex items-center justify-around'>
                        <div className="text-center">
                            <img src="/images/road-score55.webp" alt="road-score49" />
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score56.webp" alt="road-score50" />
                        </div>
                        <div className="text-center">
                            <img src="/images/road-score57.webp" alt="road-score51" />
                        </div>
                    </div>

                    <div className="h-10"></div>
                </div>
                <p className='text-center mb-20'>
                    앱 사용성 및 보행 환경에 관해 구글폼을 이용한 사후설문을 진행합니다. 작성된 설문은 향후 수정 및 보완 과정을 거쳐 고도화됩니다.
                </p>

                <div className='w-3/6'>
                    <div className='mt-40 mb-28 w-full flex justify-start'>
                        <div className="text-left">
                            <h1 className="text-4xl mb-2 inline-block">지수산정방법</h1>
                            <hr className="border-b-2 border-white-500 w-full" style={{ width: '170%' }} />
                        </div>
                    </div>
                </div>
                <p className="leading-relaxed">
                    <span className='text-2xl text-yellow-500 font-bold my-10 block'>​시민체감지수</span>
                    <span className='block my-7'>시민체감지수 각 지역 내 사용자들의 사용자체감지수를 합산하여 나타냅니다.</span>
                    <span className='block my-7'>사용자체감지수는 보행로의 네 가지 항목,<span className='text-yellow-500'>폭, 경사도, 평탄도, 유동인구</span>에 관한 사용자의 체감 정도를 <span className='text-yellow-500'>보행불가 / 보행불편 / 보행양호 / 보행편리</span></span>
                    <span className='block my-7'>​네 단계로 평가한 점수를 말합니다.</span>
                </p>
                <img src="/images/road-score58.webp" alt="road-score58" className='w-full' />

                <div className="overflow-x-auto my-20">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xl text-gray-700 uppercase bg-yellow-500 dark:bg-yellow-600 ">
                            <tr>
                                <th colSpan={2} scope="" className="px-6 py-3 text-center">
                                    로드스코어에 수집되는 4가지 항목과 단계
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-center font-bold'>
                            <tr className="bg-yellow-100 border-b text-black">
                                <td className="px-6 py-4">
                                    수집항목
                                </td>
                                <td className="px-6 py-4">
                                    체감 4단계
                                </td>
                            </tr>
                            <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                <td className="px-6 py-4">
                                    폭
                                </td>
                                <td className="px-6 py-4">
                                    보행 편리
                                </td>
                            </tr>
                            <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                <td className="px-6 py-4">
                                    경사도
                                </td>
                                <td className="px-6 py-4">
                                    보행 양호
                                </td>
                            </tr>
                            <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                <td className="px-6 py-4">
                                    평탄도
                                </td>
                                <td className="px-6 py-4">
                                    보행 불편
                                </td>
                            </tr>
                            <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
                                <td className="px-6 py-4">
                                    유동인구
                                </td>
                                <td className="px-6 py-4">
                                    보행 불가
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className='mb-10'>
                    <span className='my-5 block'>사용자의 각 평가 항목은 아래와 같은 점수를 부여하며, 네 가지 수집항목의 점수를 합산한 평균의 수치를 사용자체감지수로 반영합니다.</span>
                    <span className='mt-5 block'>​보행불가 : 0점, 보행불편: 33점, 보행양호 : 66점, 보행편리 : 100점</span>
                </p>

                <div className="text-white ">
                    <h2 className='text-2xl font-bold my-10 italic'>
                        <div>(S<sub>i</sub>) = i 의 개인 체감지수</div>

                        <div class="text-white p-4 rounded-lg">
                            <div class="text-lg md:text-xl">
                                <span class="mr-2">S<sub>i</sub> =</span>
                                <span class="font-bold">Σ<sub>x∈X</sub>R(x) / n(X)</span>
                            </div>
                            <div class="mt-2">
                                <span>= [R(w) + R(g) + R(o) + R(p)] / n(X)</span>
                            </div>
                        </div>

                        <div className='mt-2'>
                            <span className='block mt-3'>(개인체감지수) = (폭 점수) + (경사도 점수) + (평타도 점수) + (유동인구 점수) / 4</span>
                            <span className='block mt-3'>S = 시민체감지수</span>
                            <span className='block mt-3'>I = 전체 설문자 집합</span>
                            <span className='block mt-3'>
                                S<sub>i</sub> = Σ<sub>S<sub>i</sub></sub> / n(i)
                            </span>
                            <span className='block mt-3'>(시민체감지수) = (전체 개인체감지수의 합) / (전체 설문자 수)</span>
                            <span className='block mt-20'>사용자체감지수는 50점을 기준으로 점수별 색상이 구분 부여됩니다.</span>
                        </div>
                    </h2>

                    <div className="flex justify-around items-center mb-20">
                        <ScoreCard score={49} description="50점 미만" borderColor="border-red-500" bgColor="bg-red-100 bg-opacity-10" />
                        <ScoreCard score={74} description="50점 이상" borderColor="border-green-500" bgColor="bg-green-100 bg-opacity-10" />
                    </div>

                </div>
            </div>
        </div>
    );
}
