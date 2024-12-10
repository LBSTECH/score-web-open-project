import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import ToggleButton from '../bootstrap/ToggleButton';

const MapComponent = () => {
  const api = process.env.REACT_APP_API_URL;
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
      center: [126.970468, 37.524883],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
      maxBounds: bounds,
    });
    const language = new MapboxLanguage();
    initializedMap.addControl(language)
    initializedMap.on('load', () => {
      fetch(`${api}/mapbox/getDstrb`)
        .then(response => response.json())
        .then(data => {
          data.forEach(coord => {
            // Create a default marker
            const marker = new mapboxgl.Marker({
              color: '#FF0000'
            })
              .setLngLat([coord.x, coord.y])
              .addTo(initializedMap);

            // Create a popup for the marker
            const popup = new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<img src="${coord.img}" alt="Elevator Image" style="width: 150px; height: 150px;">`);

            // Attach the popup to the marker
            marker.setPopup(popup);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
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