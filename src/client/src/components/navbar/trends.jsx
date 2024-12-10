import React from 'react';

export function Trends() {
  const communityNews = [
    { text: "한국장애인공동체, '장애인 도시환경 구축' MOU 체결", url: "https://www.cstimes.com/news/articleView.html?idxno=505858" },
    { text: "한국장애인고용공단, 장애인 위한 ‘도보 내비게이션’ 만든다", url: "https://www.futurechosun.com/archives/66783" },
    { text: "세종시·영국 벨파스트시, 도시혁신 분야 협력…의향서 교환", url: "https://www.yna.co.kr/view/AKR20220331045400063?input=1195m" }
  ];
  const rsNews = [
    { text: "엘비에스테크, 시민 참여로 보행 문제 해결하는 보행환경 평가단 시범운영", url: "https://www.handmk.com/news/articleView.html?idxno=13749" },
    { text: "엘비에스테크, 슬러시(SLUSH) 2022서 보행로 데이터 수집 플랫폼 소개해... 'barrier-free 스마트시티 구축 목표'", url: "https://kr.aving.net/news/articleView.html?idxno=1774367" },
    { text: "엘비에스테크, REHACARE 2022 참가...'컨소시움 업체들과 Barrier-free zone on Road 선봬'", url: "https://www.handmk.com/news/articleView.html?idxno=13448" },
  ];
  const thesis = [
    { text: "거리 영상과 시멘틱 세그먼테이션을 활용한 보행 환경 평가 지표 개발 ( 박지영 외, 2022 )", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002837849" },
    { text: "사용자 경험 디자인을 기반으로 한 도시 가로 워터빌리티 평가 연구 ( 이은영 외, 2020 )", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002607112" },
    { text: "한국형 보행환경평가 모델 개발을 위한 기초 연구( 한국교통연구원, 2011 )", url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001594320" },
  ]
  const lawAndGuideline = [
    { text: "보행 안전 시설물의 구조 시설 기준( 국토기술교통부, 2022 )", url: "https://www.google.com/url?q=https://law.go.kr/flDownload.do?flSeq%3D62206079%26flNm%3D%255B%25EB%25B3%2584%25ED%2591%259C%2B2%255D%2B%25EB%25B3%25B4%25ED%2596%2589%25EC%2595%2588%25EC%25A0%2584%25EC%258B%259C%25EC%2584%25A4%25EB%25AC%25BC%25EC%259D%2598%2B%25EA%25B5%25AC%25EC%25A1%25B0%2B%25EC%258B%259C%25EC%2584%25A4%25EA%25B8%25B0%25EC%25A4%2580%2528%25EC%25A0%259C9%25EC%25A1%25B0%2B%25EA%25B4%2580%25EB%25A0%25A8%2529%250A&sa=D&source=editors&ust=1673853334765263&usg=AOvVaw0bHiF8u9QfIkZT-DygsbzJ" },
    { text: "보도 설치 및 관리 지침 ( 국토교통부, 2018)", url: "https://www.codil.or.kr/detailAnwGuide.do?nserialno=1785" },
    { text: "도로안전시설 설치 및 관리지침 : 장애인 안전시설( 국토교통부, 2008 )", url: "https://www.molit.go.kr/USR/I0204/m_45/dtl.jsp?gubun=&search=%EB%8F%84%EB%A1%9C%EC%95%88%EC%A0%84%EC%8B%9C%EC%84%A4%20%EC%84%A4%EC%B9%98%20%EB%B0%8F%20%EA%B4%80%EB%A6%AC%EC%A7%80%EC%B9%A8&search_dept_id=&search_dept_nm=&old_search_dept_nm=&psize=10&search_regdate_s=&search_regdate_e=&srch_usr_nm=&srch_usr_num=&srch_usr_year=&srch_usr_titl=Y&srch_usr_ctnt=Y&lcmspage=3&idx=4522" },
  ]
  const manualsAndPublications = [
    { text: "서울시 유니버셜디자인 적용 지침( 서울특별시 유니버셜디자인센터, 2021 )", url: "https://www.sudc.or.kr/udlibrary/index.html" },
    { text: "장애물 없는 생활환경 인증제도 매뉴얼( 한국장애인개발원, 2020 )", url: "https://www.koddi.or.kr/data/manual01_view.jsp?brdNum=7409931&brdTp=&searchParamUrl=amp%3BbrdType%3DMANUAL%26amp%3BpageSize%3D20%26amp%3BbrdType%3DMANUAL%26amp%3Bpage%3D1%26amp%3Bamp%3Bpage%3D1" },
    { text: "ADA Measuring Guidelines ( Snohomish Country Public Works,  2016 )", url: "https://snohomishcountywa.gov/DocumentCenter/View/12190/ADA-Measuring-Guidelines" },
  ]
  const researchReport = [
    { text: "2011년 교통약자 이동편의 실태조사 연구( 국토교통부, 2022 )", url: "https://tmacs.kotsa.or.kr/web/TraffickingWeak/psd/weak_report_list.do?mid=S3106" },
    { text: "시각장애인 보행 안전실태조사 - 건물 주차장 출입구 인접 보도를 중심으로 ( 한국소비자원 안전감시국 생황안전팀, 2020 )", url: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10556266" },
    { text: "Sidewalk Network Inventory and Assessment( Illinois Department of Transportation,  2016 )", url: "https://illinois.edu/assets/docs/ADA_Transition_Plan_Supplement_2018-12-12_Appendix-D.pdf" },
  ]

  const NewsLink = ({ text, url }) => (
    <li className="py-1 text-sm my-3">
      <a href={url} className="text-blue-300 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );

  return (
    <>
      <div className="text-white  flex flex-col justify-center items-center">
        {/* Title Section */}
        <div className='w-3/6'>
          <div className='mt-40 mb-28 w-full flex justify-start'>
            <div className="text-left">
              <h1 className="text-4xl mb-2 inline-block">국내외 보행로 기술 동향</h1>
              <hr className="border-b-2 border-white-500 w-full" style={{ width: '120%' }} />
            </div>
          </div>

          <div className="text-white flex flex-col justify-center items-center">
            <div className="text-white p-10 flex flex-wrap w-full justify-between ">
              <div className="w-full md:w-1/2 my-10">
                <h2 className="text-xl text-violet-100 font-bold mb-2">국내외 소식</h2>
                <div className="border-t border-yellow-500 pt-2">
                  {communityNews.map((news, index) => (
                    <NewsLink key={index} text={news.text} url={news.url} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 my-10">
                <h2 className="text-xl text-violet-100 font-bold mb-2">RS News</h2>
                <div className="border-t border-yellow-500 pt-2">
                  {rsNews.map((news, index) => (
                    <NewsLink key={index} text={news.text} url={news.url} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 my-10">
                <h2 className="text-xl text-violet-100 font-bold mb-2">논문</h2>
                <div className="border-t border-yellow-500 pt-2">
                  {thesis.map((news, index) => (
                    <NewsLink key={index} text={news.text} url={news.url} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 my-10">
                <h2 className="text-xl text-violet-100 font-bold mb-2">법률 / 지침</h2>
                <div className="border-t border-yellow-500 pt-2">
                  {lawAndGuideline.map((news, index) => (
                    <NewsLink key={index} text={news.text} url={news.url} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 my-10">
                <h2 className="text-xl text-violet-100 font-bold mb-2">메뉴얼 및 간행물</h2>
                <div className="border-t border-yellow-500 pt-2">
                  {manualsAndPublications.map((news, index) => (
                    <NewsLink key={index} text={news.text} url={news.url} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 my-10">
                <h2 className="text-xl text-violet-100 font-bold mb-2">연구보고서</h2>
                <div className="border-t border-yellow-500 pt-2">
                  {researchReport.map((news, index) => (
                    <NewsLink key={index} text={news.text} url={news.url} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
