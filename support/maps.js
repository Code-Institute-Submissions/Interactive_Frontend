function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 51.5074,
            lng: 0.1278
        }
    });

    var labels = "ABCDEFGHIJKLMANOPQRSTUVWXYZ";

    var locations = [
        { info: 'Main Office', lat: 51.5486, lng: -0.0071 },
        { info: 'Warehouse', lat: 51.5523, lng: 0.0469 }
    ];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
