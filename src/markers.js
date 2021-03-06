const mapboxgl = require('mapbox-gl');

//function
//module.export dat function ...from here...yes

const buildMarker = function (type, coords) {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if (type === "activity") {
        console.log('hi!')
        markerDomEl.style.backgroundImage ="url(http://i.imgur.com/WbMOfMl.png)"
    }
    if (type === "hotel") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    }
    if (type === "restaurant") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    }
        let fullStackMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    return fullStackMarker;
}

module.exports = buildMarker;
