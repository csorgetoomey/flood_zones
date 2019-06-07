
mapboxgl.accessToken = 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/csorge/cjvhhz99w0jnm1cq3per2445t',
    attribution: 'Sources: UW Libraries',
    center: [-89.971065, 30.004487],
    zoom: 13,
    maxZoom: 16,
    minZoom: 13
});

map.addControl(new mapboxgl.NavigationControl());

//load geojsons
map.on('load', function() {
    map.addLayer({
        "id":"reduced_risk",
        "type":"fill",
        "source":{
            type: 'vector',
            url: 'mapbox://csorge.4wdg47x6'
        },
        'source-layer': 'reduced_flood_risk-2i9a97',
        "paint": {
            "fill-color": "#EFF3FF",
            "fill-opacity": 1
        }
    });
    map.addLayer({
        "id":"coastal",
        "type":"fill",
        "source":{
            type: 'vector',
            url: 'mapbox://csorge.5wqgvyhn'
        },
        'source-layer': 'coastal_flood_zone-1jktwd',
        "paint": {
            "fill-color": "6BAED6",
            "fill-opacity": 1
        }
    });
    map.addLayer({
        "id":"base_zone",
        "type":"fill",
        "source":{
            type: 'vector',
            url: 'mapbox://csorge.bd6ekzso'
        },
        'source-layer': 'base_flood_zone-6fnvbr',
        "paint": {
            "fill-color": "#2171B5",
            "fill-opacity": 1
        }
    });
    map.addLayer({
        "id":"02_pct",
        "type":"fill",
        "source":{
            type: 'vector',
            url: 'mapbox://csorge.9m2ir9yn'
        },
        'source-layer': '02_pct_flood_chance-0u8ckl',
        "paint": {
            "fill-color": "BDD7E7",
            "fill-opacity": 1
        }
    });
    map.addSource('evac', {
        'type': 'geojson',
        'data': 'GEOJSONS/evacuation_spots.geojson'
    });
    map.addLayer({
        "id":"evacuation",
        "type":"circle",
        "source":"evac",
        "paint": {
            "circle-color": "green",
            "circle-opacity": 1
        }
    });
    map.addSource('pop', {
        'type': 'geojson',
        'data': 'GEOJSONS/block_group_points.geojson'
    });
    map.addLayer({
        "id":"population",
        "type":"circle",
        "source":"pop",
        "paint": {
             'circle-radius': ['get', 'total_int'],
            "circle-color": "red",
            "circle-opacity": .5
        }
    });
});

map.on('click', function (e) {
    console.log(e);
});
