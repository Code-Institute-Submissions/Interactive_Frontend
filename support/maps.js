function initMap() {
    
    /*Initializing map for perticular area on Google Map*/
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 51.5074,
            lng: 0.1278
        }
    });
    /*Location label*/
    var labels = "ABCDEFGHIJKLMANOPQRSTUVWXYZ";
    
    /*Location on the Google Map*/
    var locations = [
        { info: 'Main Office', lat: 51.5486, lng: -0.0071 },
        { info: 'Warehouse', lat: 51.5523, lng: 0.0469 }
    ];
    
    /*Create Location Mark on Google Map*/
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    /*Marking Locations on the Map*/
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
