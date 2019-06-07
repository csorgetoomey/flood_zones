
mapboxgl.accessToken = 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/csorge/cjvhhz99w0jnm1cq3per2445t',
    attribution: 'Sources: UW Libraries',
    center: [-89.971065, 30.004487],
    zoom: 10,
    maxZoom: 17
});

map.addControl(new mapboxgl.NavigationControl());

//load geojsons
map.on('load', function() {
    //Green Space
    map.addSource('evac', {
        'type': 'geojson',
        'data': 'GEOJSONS/evacuation_spots.geojson'
    });
    map.addLayer({
        "id":"evacuation",
        "type":"point",
        "source":"evac",
        "paint": {
            "fill-color": "red",
            "fill-opacity": .5
        }
    });
    map.addSource('pop', {
        'type': 'geojson',
        'data': 'GEOJSONS/pop_block_groups.geojson'
    });
    map.addLayer({
        "id":"population",
        "type":"fill",
        "source":"pop",
        "paint": {
            "fill-color": "red",
            "fill-opacity": .5
        }
    });
});

map.on('click', function (e) {
    console.log(e);
});
