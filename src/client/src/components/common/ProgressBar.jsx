import React from 'react'
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeCircle } from "d3-ease";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { getColor } from '../tapbox/MapBoxSideBar';

export const ProgressBar = ({ score }) => {
    return (
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={score}
        duration={1.3}
        easingFunction={easeCircle}
      >
        {value => {
          return (
            <CircularProgressbar
              value={value}
              text={`${score}점`}
              styles={buildStyles({ pathTransition: "none", pathColor: getColor(score), textColor: getColor(score) })}
            />
          );
        }}
      </AnimatedProgressProvider>
    );
  };