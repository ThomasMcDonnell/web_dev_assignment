// function for connecting to google maps API
function myMap() {
    // Map options
    var mapOptions = {
        center: {lat:53.350140,lng:-6.266155},
        zoom:12,
    };

    // new map
    var map = new
        google.maps.Map(document.getElementById("googleMap"),mapOptions);

    // Add Marker
    var marker = new google.maps.Marker({
        position: {lat:53.3340617, lng:-6.2667043},
        map:map
    });

    // Information Window
    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>Find Me?</h3><p>Often here in starbucks coding my next project and getting my daily dose of caffine</p>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}


