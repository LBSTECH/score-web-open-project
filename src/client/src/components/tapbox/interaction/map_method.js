export const addPolygon = (area, map, clickPolygon, setSelectedArea, setTapBoxIsInit, is3D, setIs3D) => {
    area.forEach((areaItem, index) => {
        const score = areaItem.score;

        const color = score >= 76 ? '#33FF33' :
            score >= 51 ? '#FFFF00' :
                score >= 26 ? '#FF6600' : '#999999';
        const polygonId = `polygon-${index}`;
        const borderId = `border-${index}`;

        map.addSource(polygonId, {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'MultiPolygon',
                    'coordinates': JSON.parse(areaItem.geom).coordinates,
                }
            }
        });
        map.addLayer({
            'id': polygonId,
            'type': 'fill',
            'source': polygonId,
            'layout': {},
            'paint': {
                'fill-color': color,
                'fill-opacity': 0.3
            }
        });
        map.addLayer({
            'id': borderId,
            'type': 'line',
            'source': polygonId,
            'layout': {},
            'paint': {
                'line-color': color,
                'line-width': 1.5,
                'line-opacity': 1
            }
        });
        map.addLayer({
            'id': `label-${index}`,
            'type': 'symbol',
            'source': polygonId,
            'layout': {
                'text-field': areaItem.sgg2,
                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                'text-radial-offset': 0.5,
                'text-justify': 'auto',
                'text-size': 20
            },
            'paint': {
                'text-color': '#000000'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': JSON.parse(areaItem.center).coordinates,
            }
        });
        map.on('mouseenter', polygonId, () => {
            map.setPaintProperty(polygonId, 'fill-opacity', 0.6);
        });
        map.on('mouseleave', polygonId, () => {
            map.setPaintProperty(polygonId, 'fill-opacity', 0.3);
        });

        map.on('click', polygonId, (e) => {
            clickPolygon(map, areaItem, setSelectedArea, setTapBoxIsInit)
            setIs3D(!is3D)
        });
    })
}
export const clickPolygon = (map, item, setSelectedArea, setTapBoxIsInit) => {
    setSelectedArea(item);
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        if (layer.id.startsWith('polygon-') || layer.id.startsWith('label-') || layer.id.startsWith('border-')) {
            if (map.getLayer(layer.id)) {
                map.removeLayer(layer.id);
            }
        }
    });
    map.flyTo({
        center: JSON.parse(item.center).coordinates,
        zoom: 16,
        essential: true,
        pitch: 45,
        bearing: -17.6
    });
    map.addSource('selected-polygon', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'MultiPolygon',
                'coordinates': JSON.parse(item.geom).coordinates,
            }
        }
    });
    map.addLayer({
        'id': 'selected-polygon',
        'type': 'line',
        'source': 'selected-polygon',
        'layout': {},
        'paint': {
            'line-color': '#999999',
            'line-width': 10,
            'line-opacity': 1
        }
    });
    map.addSource('building-data-source', {
        type: 'vector',
        url: 'mapbox://wnsgud766.czn9t9w6'
    });
    map.addLayer({
        'id': 'building-extrude',
        'type': 'fill-extrusion',
        'source': 'building-data-source',
        "source-layer": "intgscoreseouldbuild",
        'filter': ['==', ['get', 'gid_2'], item.code],
        'paint': {
            'fill-extrusion-height': [
                'case',
                ['==', ['coalesce', ['get', 'A16'], 0.0], 0.0],
                6.0,
                ['get', 'A16']
            ],
            'fill-extrusion-opacity': 0.6,
            'fill-extrusion-color': [
                'case',
                ['==', ['get', 'verify'], 1999], '#FF9999',
                ['==', ['get', 'verify'], 2999], '#FF9999',
                ['==', ['get', 'verify'], 2000], '#CCFFCC',
                ['==', ['get', 'verify'], 3000], '#CCFFCC',
                '#CCCCCC'
            ]
        }
    });
    map.addSource('building-dgrp-source', {
        type: 'vector',
        url: 'mapbox://wnsgud766.9agenzgr'
    })
    map.addLayer({
        'id': 'buildings',
        'type': 'circle',
        'source': 'building-dgrp-source',
        'filter': ['==', ['get', 'gid_2'], item.code],
        'source-layer': 'dgrp',
        'paint': {
            'circle-radius': 4,
            'circle-color': '#B42222'
        }

    })
    tooltipBuilding(map)
    setTapBoxIsInit(true)
};
export const tooltipBuilding = (map) => {
    // Create a new div element for the tooltip
    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    tooltip.style.display = 'none'; // Initially hidden
    tooltip.style.zIndex = '9999'; // Ensure the tooltip is on top
    document.body.appendChild(tooltip);


    map.on('click', 'building-extrude', function (e) {
        // Extract building information from the clicked feature
        const properties = e.features[0].properties;
        const buildingName = properties.name; // Adjust based on your data's property key

        // Update the tooltip content
        tooltip.innerHTML = `Building Name: ${buildingName ? buildingName : 'Not Available'}`;
        tooltip.style.display = 'block';

        // Position the tooltip
        // Convert the clicked point's location to pixel coordinates to position the tooltip
        const coordinates = e.point;
        tooltip.style.left = `${coordinates.x}px`;
        tooltip.style.top = `${coordinates.y}px`;
    });

    // Hide the tooltip when the user clicks elsewhere on the map
    map.on('click', function (e) {
        if (!e.features || e.features[0].layer.id !== 'building-extrude') {
            tooltip.style.display = 'none';
        }
    });
};

export const setMapStyle = (map, styleUrl) => {
    if (map && styleUrl) {
        map.setStyle(styleUrl);
    }
};