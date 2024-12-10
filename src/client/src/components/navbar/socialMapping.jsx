import React, { useState } from 'react';

export function SocialMapping() {
  const [activeContent, setActiveContent] = useState('none');

  const changeContent = (content) => {
    setActiveContent(content);
  };

  const buttonStyle = "px-6 py-3 rounded text-lg font-medium transition-colors duration-150 focus:outline-none";

  return (
    <div className="text-white flex flex-col justify-center items-center bg-dark">
      <div className="p-4 w-full max-w-4xl">
        <h1 className="text-4xl mt-40 font-bold mb-9 text-yellow-300">소셜 맵핑(Social Mapping)이란?</h1>
        <p className="mb-9">개인이 아닌 다양한 사람이 함께 수집하고 제공한 정보를 기반으로 지도를 제작하는 것으로 사회 구성원 누구나 참여할 수 있습니다.</p>
        <h1 className='text-4xl mt-10 font-bold mb-9 text-yellow-300'>Road Score</h1>
        <p className='mb-20'>는, 시민이 함께 만드는 보행환경평가 기반 소셜맵핑 서비스 입니다.</p>
        <div className="flex justify-center mb-20 space-x-4 w-full">
          <div className="flex flex-grow">
            <button
              className={`${buttonStyle} ${activeContent === 'insurance' ? 'bg-yellow-500' : 'bg-transparent border border-yellow-500 hover:bg-yellow-600'} flex-1`}
              onClick={() => changeContent('insurance')}
            >
              보행약자
            </button>
          </div>
          <div className="flex flex-grow">
            <button
              className={`${buttonStyle} ${activeContent === 'variety' ? 'bg-yellow-500' : 'bg-transparent border border-yellow-500 hover:bg-yellow-600'} flex-1`}
              onClick={() => changeContent('variety')}
            >
              다양한 기업 및 기관
            </button>
          </div>
          <div className="flex flex-grow">
            <button
              className={`${buttonStyle} ${activeContent === 'citizens' ? 'bg-yellow-500' : 'bg-transparent border border-yellow-500 hover:bg-yellow-600'} flex-1`}
              onClick={() => changeContent('citizens')}
            >
              전국 모든 시민
            </button>
          </div>
        </div>

        <div className="content rounded-lg">
          {activeContent === 'insurance' &&
            <div>
              <h1 className='text-2xl mb-5'>보행약자와 함께합니다.</h1>
              <p className='mb-20'>
                로드스코어는 다양한 장애인단체와 협약을 맺고 보행 약자분들과 함께 데이터를 수집합니다.
                장애인 사회활동 참여 유도와 보행환경 및 안전 개선에 앞장 섭니다.
                2023년 1월 기준, 4년이 넘는 기간 동안 1,550명의 보행약자와 함께 보행로 데이터를 수집해왔습니다.
                보행약자의 시선으로 수집된 데이터는 보행 시의 불편사항을 더욱 효과적으로 반영합니다.
              </p>
              <img src="/images/road-score3.png" alt="road-score3" className='mb-40' />
            </div>
          }

          {activeContent === 'variety' &&
            <div>
              <h1 className='text-2xl mb-5'>​다양한 기업 및 기관과 함께합니다.</h1>
              <p className='mb-20'>
                장애인고용공단, 광화문 ONE팀을 중심으로 54개 기업 및 기관과 함께 시시각각 프로젝트를 진행하며 41,500건의 보행정보, 접근성 정보를 수집했습니다.
                시시각각 프로젝트는 각각의 눈이 모여 장애인의 눈이 되어주는 보행로 빅데이터 수집 프로젝트입니다.
              </p>

              <div className="p-4 mb-28">
                <div className="grid grid-cols-5 gap-3 mb-4">
                  <img src='/images/road-score4.webp' alt='road-score4' className="h-12" />
                  <img src='/images/road-score5.webp' alt='road-score5' className="h-12" />
                  <img src='/images/road-score6.webp' alt='road-score6' className="h-12" />
                  <img src='/images/road-score7.webp' alt='road-score7' className="h-12" />
                  <img src='/images/road-score8.webp' alt='road-score8' className="h-20" />
                  <img src='/images/road-score9.webp' alt='road-score9' className="h-12" />
                  <img src='/images/road-score10.webp' alt='road-score10' className="h-12" />
                  <img src='/images/road-score11.webp' alt='road-score11' className="h-12" />
                  <img src='/images/road-score12.webp' alt='road-score12' className="h-12" />
                  <img src='/images/road-score13.webp' alt='road-score13' className="h-12" />
                  <img src='/images/road-score14.webp' alt='road-score14' className="h-12" />
                  <img src='/images/road-score15.webp' alt='road-score15' className="h-12" />
                  <img src='/images/road-score16.webp' alt='road-score16' className="h-12" />
                  <img src='/images/road-score17.webp' alt='road-score17' className="h-12" />
                  <a href="https://www.youtube.com/watch?v=TPFgNa53QXA" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
                    <img src='/images/road-score24.webp' alt="YouTube Thumbnail" className="max-h-full" />
                    <img src='/images/road-score27.webp' alt="YouTube Logo" className="absolute" style={{ width: '70px', height: '50px' }} />
                  </a>
                  <img src='/images/road-score18.webp' alt="road-score18" className="h-12" />
                  <img src='/images/road-score19.webp' alt="road-score19" className="h-12" />
                  <img src='/images/road-score20.webp' alt="road-score20" className="h-12" />
                  <img src='/images/road-score21.webp' alt="road-score21" className="h-12" />
                  <img src='/images/road-score22.webp' alt="road-score22" className="h-12" />
                  <img src='/images/road-score23.webp' alt="road-score23" className="h-12" />
                </div>
              </div>
            </div>
          }
          {activeContent === 'citizens' &&
            <div>
              <h1 className='text-2xl mb-5'>사회 구성원 모두와 함께합니다.</h1>
              <p className='mb-20'>
                기업 및 기관을 중심으로 진행하던 시시각각 프로젝트는 스마트폰을 가진 누구나 참여가 가능한 보행로 소셜 맵핑 프로젝트입니다.
                데이터 수집 앱 로드스캐너를 통해 환경 개선에 함께할 수 있습니다.
              </p>
              <div className="container mb-28 mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="flex flex-col md:flex-row">
                    <img src='/images/road-score25.webp' alt="App screenshot 1" className="w-full m-4" />
                    <img src='/images/road-score26.webp' alt="App screenshot 2" className="w-full m-4" />
                  </div>

                  <div className="text-center md:text-left">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-4">로드스캐너 앱 다운로드</h2>
                    <div className="mb-6 flex  ">
                      <a href="https://play.google.com/store/apps/details?id=roadscanner.ver2020.lbstech.net.road_scanner_2020&pli=1" target="_blank" rel="noopener noreferrer">
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold mr-4 w-40 h-12">
                          안드로이드
                        </button>
                      </a>
                      <a href="https://apps.apple.com/kr/app/%EB%A1%9C%EB%93%9C%EC%8A%A4%EC%BC%80%EB%84%88/id1531650595" target="_blank" rel="noopener noreferrer">
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold w-40 h-12">
                          iOS
                        </button>
                      </a>
                    </div>
                    <p>
                      보행 장애물 정보 수집을 위한 소셜맵핑 플랫폼, Road Scanner입니다. <br />
                      불법 주차, 쓰레기, 경사로 등 기존의 지도에 없는 보행로의 실제 상태, <br />
                      그리고 교통약자 건물 접근성 현황을 로드스캐너를 통해 수집합니다. <br />
                      이렇게 수집된 데이터는 G-EYE 시리즈에 반영되어 제공됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
