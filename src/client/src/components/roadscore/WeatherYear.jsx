import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import ToggleButton from '../bootstrap/ToggleButton';

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [is3D, setIs3D] = useState(true);
  
  
  const bounds = [
    [126.966867, 37.562685], //남서쪽 좌표
    [126.988738, 37.573933]   // 북동쪽 좌표
  ];
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoid25zZ3VkNzY2IiwiYSI6ImNsbzJnd2N3bjFrNG8yaXBldGU3dnhhZ2MifQ.PXzAQDQqxlz4EJxgZUli1Q';
    const initializedMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [126.9781076, 37.5643169],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
      maxBounds: bounds,
    });
    const language = new MapboxLanguage();
    initializedMap.addControl(language)
    initializedMap.on('load', () => {
      const locations = [
        [126.9773341, 37.5665416],
        [126.9791361, 37.5674022],
        [126.9783203, 37.5689353]
      ]
      locations.forEach(coord => {
        new mapboxgl.Marker({
          color: '#6666FF'
        })
          .setLngLat(coord)
          .addTo(initializedMap);
      })
    })
    setMap(initializedMap);
    return () => initializedMap.remove();
  }, []);

  const toggle3DView = () => {
    setIs3D(currentIs3D => {
      const newIs3D = !currentIs3D;
      if (map) {
        map.flyTo({
          pitch: newIs3D ? 45 : 0,
          bearing: newIs3D ? -17.6 : 0,
        });
      }
      return newIs3D;
    });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ width: '100%', height: '1000px', position: 'relative', border: 'none' }}>
        <ToggleButton map={map} is3D={is3D} toggle3DView={toggle3DView} />
        <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default MapComponent;