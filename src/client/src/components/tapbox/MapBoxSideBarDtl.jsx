import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { ProgressBar } from '../common/ProgressBar';
import Road from './Road';
import PedestrianFact from './PedestrianFact';
import PedestrianCon from './PedestrianCon';
import Dstrb from './Dstrb';
import Weather from './Weather';
import StreetFact from './StreetFact';

export function MapBoxSideBarDtl(props) {
  const { text, score ,code} = props;
  const componentMap = {
    '보행로': Road,
    '보행시설': PedestrianFact,
    '가로시설': StreetFact,
    '장애물': Dstrb,
    '보행혼잡도': PedestrianCon,
    '날씨': Weather,
  };
  const ComponentToRender = componentMap[text] || null;
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='w-2/3'>
          {score && <ProgressBar score={score} />}
        </div>
        <div className='text-black text-center text-2xl py-5'>{text}</div>
      </div>
      {ComponentToRender ? <ComponentToRender local_idx={12} code={code}/> : null}
    </>
  );
}
