import React, { useEffect } from 'react';
import { useStore } from '../store/store';
import './ToggleButton.css';

const ToggleButton = () => {
  const { map, is3D, setIs3D } = useStore(state => state);

  const toggle3DView = () => {
    setIs3D(!is3D);
    if (map) {
      map.flyTo({
        pitch: !is3D ? 45 : 0,
        bearing: !is3D ? -17.6 : 0,
      });
      add3DBuildings(map, !is3D);
    }
  };

  useEffect(() => {
    if (map) {
      const handleStyleLoad = () => add3DBuildings(map, is3D);
      
      if (is3D) {
        if (map.isStyleLoaded()) {
          handleStyleLoad();
        } else {
          map.on('style.load', handleStyleLoad);
        }
      } else {
        if (map.getLayer('building-extrude')) {
          map.setPaintProperty('building-extrude', 'fill-extrusion-height', 0);
        }
      }
    }

    return () => {
      if (map) {
        map.off('style.load', add3DBuildings);
      }
    };
  }, [map, is3D]);

  return (
    <div className='toggle-button' onClick={toggle3DView}>
      <div className={`toggle-bar ${is3D ? 'on' : 'off'}`}>
        <span className="label label-2d">2D</span>
        <div className={`indicator ${is3D ? 'on' : 'off'}`}></div>
        <span className="label label-3d">3D</span>
      </div>
    </div>
  );
};

export const add3DBuildings = (map, is3D) => {
  if (map.getLayer('building-extrude')) {
    const heightExpression = is3D ?
      ['case',
        ['==', ['coalesce', ['get', 'A16'], 0.0], 0.0],
        6.0,
        ['get', 'A16']
      ] :
      0;
    map.setPaintProperty('building-extrude', 'fill-extrusion-height', heightExpression);
  } else {
    console.log('The layer "building-extrude" does not exist on the provided map.');
  }
};

export default ToggleButton;
