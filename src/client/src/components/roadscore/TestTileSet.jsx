import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export function TestTileSet() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoid25zZ3VkNzY2IiwiYSI6ImNsbzJnd2N3bjFrNG8yaXBldGU3dnhhZ2MifQ.PXzAQDQqxlz4EJxgZUli1Q';
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',  // Compatible style URL
            center: [127.490595, 36.655764],  // Center coordinates
            zoom: 17,  // Initial zoom level
            pitch: 55,  // Initial pitch (angle of tilt)
            maxBounds: [
                [127.3857, 36.5901],  // Southwest coordinates
                [127.5754, 36.6777]   // Northeast coordinates
            ]
        });

        map.on('style.load', () => {
            // Remove building layers
            const layers = map.getStyle().layers;
            layers.forEach((layer) => {
                if (layer.id.includes('building')) {
                    map.removeLayer(layer.id);
                }
                // Remove label layers
                if (layer.id.includes('label')) {
                    map.removeLayer(layer.id);
                }
            });

            // Remove building sources
            const sources = map.getStyle().sources;
            for (const source in sources) {
                if (source.includes('building')) {
                    map.removeSource(source);
                }
            }
        });

        map.on('error', (e) => {
            console.error('An error occurred while loading the map:', e);
        });

        return () => map.remove();
    }, []);

    return (
        <div ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />
    );
}

export default TestTileSet;