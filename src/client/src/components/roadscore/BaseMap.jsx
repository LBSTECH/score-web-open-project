import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import ToggleButton from '../common/ToggleButton';
import { IndexTapbox } from '../tapbox/IndexTapbox';
import Legend from '../common/Legend';
import Logo from '../common/Logo';
import axios from 'axios';
import { useStore } from '../store/store';
import { addPolygon } from '../tapbox/interaction/map_method';
import { clickPolygon } from '../tapbox/interaction/map_method';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import './photo.css';

export function BaseMap() {
    const mapContainerRef = useRef(null);
    const api = process.env.REACT_APP_API_URL;
    const bounds = [
        [126.44283, 37.40195],
        [127.51054, 37.7113]
    ];
    const {
        area,
        isAreaLoaded,
        tapboxIsInit,
        selectedArea,
        setArea,
        setMap,
        is3D,
        carouselIsOpen,
        selectedCarouselImg,
        setSelectedCarouseImg,
        setCarouselIsOpen,
        setIs3D,
        setIsAreaLoaded,
        setTapBoxIsInit,
        setSelectedArea,

    } = useStore(state => state);
    const openCarousel = (arr) => {
        setCarouselIsOpen(true)
        setSelectedCarouseImg(arr);
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        async function getInitArea() {
            axios.get(api + '/init/area')
                .then(response => {
                    setArea(response.data);
                    setIsAreaLoaded(true);
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                });
        }
        getInitArea();
    }, []);

    useEffect(() => {
        if (!isAreaLoaded) {
            return;
        }
        mapboxgl.accessToken = 'pk.eyJ1Ijoid25zZ3VkNzY2IiwiYSI6ImNsbzJnd2N3bjFrNG8yaXBldGU3dnhhZ2MifQ.PXzAQDQqxlz4EJxgZUli1Q';
        const initializedMap = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [126.9783343, 37.5665044],
            zoom: 9,
            pitch: 0,
            bearing: 0,
            antialias: true,
            maxBounds: bounds
        });
        const language = new MapboxLanguage();
        initializedMap.addControl(language);
        initializedMap.on('load', () => {
            initializedMap.setLayoutProperty('building', 'visibility', 'none');
            addPolygon(area, initializedMap, clickPolygon, setSelectedArea, setTapBoxIsInit, is3D, setIs3D);
        });

        initializedMap.on('click', 'building-extrude', (e) => {
            const properties = e.features[0].properties;
            const buildingName = properties.nm === 'NULL' ? '정보없음' : properties.nm;
            const buildingAdr = properties.adr === 'NULL' ? '정보없음' : properties.adr;
            const idx_point = properties.idx_point;
            const doorTypes = {
                '0': '기타',
                '1': '분류되지않음',
                '1100': '여닫이',
                '1200': '미닫이',
                '2000': '버튼문',
                '3000': '자동문',
                '3300': '회전문'
            };
            let doorType = [];
            axios.get(`${api}/build/point-door-typ/${idx_point}`)
                .then((response) => {
                    response.data.forEach(item => {
                        doorType.push(doorTypes[item.typ])
                    });
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                });
            const coordinates = e.lngLat;
            axios.get(`${api}/build/point-dgrp-data/${idx_point}`)
                .then((response) => {
                    const responseData = response.data;
                    console.log(responseData);
                    const imageUrls = responseData.map(item => item);
                    const popupContent = document.createElement('div');
                    popupContent.innerHTML = `
                    <div style="font-size: 16px;">
                        <h1 style="margin: 0; font-size: 1.25em;"><strong>${buildingName}</strong></h1>
                        <br/>
                        <h3 style="margin: 0; font-size: 1em;"><strong>${buildingAdr}</strong></h3>
                        <div><br/>${doorType.length === 0 ? '문정보 없음' : doorType.join(', ')}</div>
                        <div id="photo-stack" class="photo-stack">${imageUrls.map((url, index) => `<img src="${url}" alt="Carousel ${index + 1}" style="z-index: ${imageUrls.length - index};">`).join('')}</div>
                    </div>
                `;
                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setDOMContent(popupContent)
                        .addTo(initializedMap);

                    document.getElementById('photo-stack').addEventListener('click', () => {
                        openCarousel(imageUrls);
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            initializedMap.flyTo({
                center: coordinates,
                zoom: 18.5,
                essential: true
            });
        });
        setMap(initializedMap);
        return () => initializedMap.remove();
    }, [isAreaLoaded]);
    return (
        <div className="flex justify-center items-center relative w-full h-full">
            <Logo />
            <div className="right-10">
                <ToggleButton />
            </div>
            {tapboxIsInit ?
                <IndexTapbox selectedArea={selectedArea} /> : <Legend />
            }
            {carouselIsOpen && (
                <div className="carousel-overlay" onClick={() => setCarouselIsOpen(false)}>
                    <Carousel className="carousel-content" autoPlay={false} animation="slide">
                        {selectedCarouselImg.map((url, index) => (
                            <Paper key={index} elevation={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'transparent' }}>
                                <div className="image-container" style={{ backgroundColor: 'white' }}>
                                    <img src={url} alt={`Carousel item ${index + 1}`} className="carousel-image" />
                                </div>
                            </Paper>
                        ))}
                    </Carousel>
                </div>
            )}
            {!tapboxIsInit && <div className="absolute top-0 right-10 z-10"><Legend /></div>}
            <div ref={mapContainerRef} className="w-screen h-screen" />
        </div>
    );
};
export default BaseMap;