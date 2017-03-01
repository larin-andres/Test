require('./style.scss');

var markerTmpl = require('./_marker_common.jade');
var latLng = new google.maps.LatLng({lat: 50.448853, lng: 30.513346});
var mapOption = {
    zoom: 12
    , center: latLng
    , mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOption);

//Create infoWindow in global
var infoWind = new google.maps.InfoWindow();

var addMarker = function(position, map){
    var marker = new google.maps.Marker({
        position: position
        , map: map
        , title: 'The best pizza'
    });
    console.log(position.toJSON());

    //Fill in infoWindow`s content and open for each marker
    var addWindContent = function() {
        marker.addListener('click', function () {
            infoWind.setContent(markerTmpl({
                name: 'The best pizza'
                , type: 'pizzeria'
                , field: {
                    comfortable: 3
                    , square: 65
                    , service: 2
                }
            }));
            infoWind.open(map, this);
        });
    };

    addWindContent();
};

map.addListener('click', function(e){
    addMarker(e.latLng, map);
});

module.exports.map = map;