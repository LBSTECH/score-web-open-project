import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import ToggleButton from '../bootstrap/ToggleButton';

const MapComponent = () => {
    const api = process.env.REACT_APP_API_URL;
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);
    const [is3D, setIs3D] = useState(true); 
    //제한구역
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
            fetch(`${api}/mapbox/getCctv`)
                .then(response => response.json())
                .then(data => {
                    const geojsonData = {
                        type: 'FeatureCollection',
                        features: data.map(coord => ({
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [coord.x, coord.y]
                            }
                        }))
                    };
        
                    initializedMap.addSource('lampData', {
                        type: 'geojson',
                        data: geojsonData,
                        cluster: true,
                        clusterMaxZoom: 14, // Max zoom to cluster points on
                        clusterRadius: 50 // Radius of each cluster when clustering points
                    });
        
                    initializedMap.addLayer({
                        id: 'clusters',
                        type: 'circle',
                        source: 'lampData',
                        filter: ['has', 'point_count'],
                        paint: {
                            // Use a step expression to implement a graduated circle size based on the number of points in the cluster
                            'circle-radius': [
                                'step',
                                ['get', 'point_count'],
                                20, // size of the circle when the cluster count is 0
                                100, 30, // size of the circle when the cluster count is 100 or more
                                750, 40  // size of the circle when the cluster count is 750 or more
                            ],
                            // Color the clusters based on the number of points
                            'circle-color': [
                                'step',
                                ['get', 'point_count'],
                                '#51bbd6', // color when the cluster count is less than 100
                                100, '#f1f075', // color when the cluster count is 100 or more
                                750, '#f28cb1'  // color when the cluster count is 750 or more
                            ],
                            'circle-opacity': 0.75,
                            'circle-stroke-width': 1,
                            'circle-stroke-color': '#fff'
                        }
                    });
        
                    initializedMap.addLayer({
                        id: 'cluster-count',
                        type: 'symbol',
                        source: 'lampData',
                        filter: ['has', 'point_count'],
                        layout: {
                            'text-field': '{point_count_abbreviated}',
                            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                            'text-size': 12
                        }
                    });
        
                    initializedMap.addLayer({
                        id: 'unclustered-point',
                        type: 'circle',
                        source: 'lampData',
                        filter: ['!', ['has', 'point_count']],
                        paint: {
                            'circle-color': '#000066',
                            'circle-radius': 4,
                            'circle-stroke-width': 1,
                            'circle-stroke-color': '#fff'
                        }
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });
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
        <div style={{overflow: "hidden"}}>
        <div style={{ width: '100%', height: '1000px', position: 'relative' ,border : 'none'}}>
          <ToggleButton map={map} is3D={is3D} toggle3DView={toggle3DView}/>
          <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>
        </div>
      );
    };
    
    export default MapComponent;