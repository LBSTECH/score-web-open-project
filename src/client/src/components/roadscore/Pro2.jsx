import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

mapboxgl.accessToken = 'pk.eyJ1Ijoid25zZ3VkNzY2IiwiYSI6ImNsbzJnd2N3bjFrNG8yaXBldGU3dnhhZ2MifQ.PXzAQDQqxlz4EJxgZUli1Q';

export default function Pro() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const center = [126.937205, 37.556874]; // 중심 좌표 (서울)

  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/navigation-day-v1', // Use the streets style
        center: center,
        zoom: 16,
        pitch: 45, // 3D 효과를 주기 위해 피치 추가
        bearing: -17.6 // 3D 효과를 주기 위해 bearing 추가
      });

      // Add the language plugin
      map.addControl(new MapboxLanguage({ defaultLanguage: 'ko' }));

      map.on('load', () => {
        // Function to remove layers related to buildings, roads, and traffic
        const removeUnwantedLayers = () => {
          const layers = map.getStyle().layers;
          layers.forEach((layer) => {
            if (
              layer.id.includes('building') ||
              layer.id.includes('3d-buildings') ||
              layer.id.includes('traffic') ||
              layer.id.includes('road-traffic')
            ) {
              map.removeLayer(layer.id);
            }
          });

          const sources = map.getStyle().sources;
          for (const sourceId in sources) {
            if (
              sourceId.includes('building') ||
              sourceId.includes('composite') ||
              sourceId.includes('traffic') ||
              sourceId.includes('road-traffic') 
            ) {
              map.removeSource(sourceId);
            }
          }
        };

        removeUnwantedLayers();

        // Hide all text layers
        map.getStyle().layers.forEach((layer) => {
          if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
            map.setLayoutProperty(layer.id, 'visibility', 'none');
          }
        });

        setMap(map);
      });

      return map;
    };

    if (!map) {
      initializeMap();
    }
  }, [map]);

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}