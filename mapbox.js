
mapboxgl.accessToken = 'pk.eyJ1IjoiY3NvcmdlIiwiYSI6ImNqb3A2cGMwMzAxbTkzcW9meDIzMDE0ZHMifQ.R5gWO0aBEldQdqU0Nlir-Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/csorge/cjvhhz99w0jnm1cq3per2445t',
    attribution: 'Sources: UW Libraries',
    center: [-122.303200, 47.655548],
    zoom: 16,
    maxZoom: 17
});

map.addControl(new mapboxgl.NavigationControl());

//load geojsons
map.on('load', function() {
    //Green Space
    map.addSource('greenspace', {
        'type': 'geojson',
        'data': 'CAMPUS_GEOJSONS/GEOJSON_Landscape.geojson'
    });
    map.addLayer({
        "id":"gspace",
        "type":"fill",
        "source":"greenspace",
        "paint": {
            "fill-color": "green",
            "fill-opacity": .5
        }
    });
});

map.on('click', function (e) {
    console.log(e);
});
