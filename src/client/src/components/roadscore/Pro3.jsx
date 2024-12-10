import React, { useRef, useEffect, useState } from "react";
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

mapboxgl.accessToken = 'pk.eyJ1Ijoid25zZ3VkNzY2IiwiYSI6ImNsbzJnd2N3bjFrNG8yaXBldGU3dnhhZ2MifQ.PXzAQDQqxlz4EJxgZUli1Q';

export default function Pro() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [highlightedBuildings, setHighlightedBuildings] = useState([]);
  const center = [126.937205, 37.556874]; // 중심 좌표 (서울)

  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/navigation-day-v1',
        center: center,
        zoom: 16,
        pitch: 0, // 2D 효과를 주기 위해 pitch를 0으로 설정
        bearing: 0 // 2D 효과를 주기 위해 bearing을 0으로 설정
      });

      map.on('style.load', () => {
        // 레이블 제거
        const layers = map.getStyle().layers;
        layers.forEach(layer => {
          if (layer.type === 'symbol' || layer.id.includes('traffic') || layer.id.includes('road-traffic')) {
            map.removeLayer(layer.id);
          }
        });

        // 2D 건물 레이어 추가
        map.addLayer({
          'id': '2d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill',
          'paint': {
            'fill-color': '#aaa',
            'fill-opacity': 0.4
          }
        });
      });

      map.on('load', () => {
        setMap(map);
      });

      return map;
    };

    if (!map) {
      initializeMap();
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      const handleMapClick = (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['2d-buildings']
        });

        if (!features.length) return;

        const baseBuilding = features[0];
        const baseBuildingCoordinates = turf.centroid(baseBuilding).geometry.coordinates;

        // 기존 마커 제거
        if (marker) {
          marker.remove();
        }

        // 새 마커 추가
        const newMarker = new mapboxgl.Marker({ color: 'red' })
          .setLngLat(baseBuildingCoordinates)
          .addTo(map);

        setMarker(newMarker);

        // 기존 하이라이트 건물 초기화
        highlightedBuildings.forEach(building => {
          const layerId = `highlighted-building-${building.id}`;
          if (map.getLayer(layerId)) {
            map.removeLayer(layerId);
          }
          if (map.getSource(layerId)) {
            map.removeSource(layerId);
          }
        });

        // 반경 300미터 내의 건물 필터링
        const centerPoint = turf.point(baseBuildingCoordinates);
        const radius = 0.3; // 300미터
        const options = { units: 'kilometers' };
        const buildings = map.queryRenderedFeatures({
          layers: ['2d-buildings']
        });
        const withinRadius = buildings.filter(building => {
          const buildingPoint = turf.centroid(building);
          const distance = turf.distance(centerPoint, buildingPoint, options);
          return distance <= radius;
        });

        if (withinRadius.length > 8) {
          const randomBuildings = [];
          const randomIndexes = new Set();

          while (randomIndexes.size < 8) {
            const randomIndex = Math.floor(Math.random() * withinRadius.length);
            randomIndexes.add(randomIndex);
          }

          randomIndexes.forEach(index => {
            randomBuildings.push(withinRadius[index]);
          });

          // 각 건물에 색상 적용
          randomBuildings.forEach((building, index) => {
            let color;
            if (index < 3) { color = '#90cbfb'; // 노란색 
            } else if (index < 6) { color = '#2e92ff'; // 파란색
            } else { color = '#50ff8b'; // 초록색 
          }

            const layerId = `highlighted-building-${building.id}`;
            map.addLayer({
              'id': layerId,
              'type': 'fill',
              'source': {
                'type': 'geojson',
                'data': {
                  'type': 'FeatureCollection',
                  'features': [building]
                }
              },
              'paint': {
                'fill-color': color,
                'fill-opacity': 0.9
              }
            });
          });

          setHighlightedBuildings(randomBuildings);
        }
      };

      map.on('click', handleMapClick);

      return () => {
        map.off('click', handleMapClick);
      };
    }
  }, [map, marker, highlightedBuildings]);

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}