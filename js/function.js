$(document).ready(function() {
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav-wrapper').classList.toggle('nav-wrapper-visible');
}

  $('#footer_form').validationEngine({promptPosition : "centerRight"});


var points = [
  // Найти координаты: http://www.mapcoordinates.net/ru
  {lat: 59.849, lng: 30.422},
  {lat: 59.797, lng: 30.396},
  {lat: 59.817, lng: 30.394}
];

$.ajax({
  url: 'https://maps.googleapis.com/maps/api/js',
    dataType: 'jsonp',
  jsonp: 'callback',
  data: {
    // АХТУНГ! Это МОЙ ключ! Заведите свой!
    key: 'AIzaSyDjGAiz42P2243i_aoNCu4Pf0vU_xDWcZk',
    signed_in: true
  },
  success: mapInit
});

function mapInit() {
  var map = new google.maps.Map($('#map').get(0), {
    center: {lat: 59.820, lng: 30.410},
    zoom: 12,
    // disableDefaultUI: true,
    scrollwheel: false,
  });

  var markers = [];

  points.forEach(function (position, i) {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
    }));
  });
}



});






