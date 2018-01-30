console.log('Yaaaaas queen 👑');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./markers.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxla3NzaGluZWxldmEiLCJhIjoiY2pkMXZnYW91MGlzcjJ3cGExYWplZDBudCJ9.ZJyH5Obt-EYKod3LgmBwYw';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
//     markerDomEl.style.width = "32px";
//     markerDomEl.style.height = "39px";
//     markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const fullStackMarker = new mapboxgl.Marker( markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);


buildMarker('hotel', [-73.9856,  40.7385]).addTo(map);
buildMarker('activity', [-74.009151, 40.705086]).addTo(map);
//console.log(marker);
