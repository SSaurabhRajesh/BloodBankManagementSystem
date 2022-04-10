function initMap() {
    var center = {lat: 19.169488887098026, lng: 77.30361640984823};
    var locations = [
      ['Nanded Blood Bank<br>\
     <a href="https://goo.gl/maps/uM5C8GJHNye2n9sR9">Get Directions</a>',   19.16763801279376, 77.30548535338062],
      ['Jijai Blood Center<br>\
     <a href="https://goo.gl/maps/ChYbWidJKYFRwy668">Get Directions</a>', 19.165683594382372, 77.30595560666669],
      ['Arpan Blood Bank<br>\
      <a href="https://goo.gl/maps/gFoqZNdPQtRAaGHA6">Get Directions</a>', 19.15815678275278, 77.30901251566065],
      ['Huzur Saheb Blood Bank<br>\
      <a href="https://goo.gl/maps/fb6hq88e1ydYDWAr6">Get Directions</a>', 19.1498250495134, 77.32361768957165],
      ['The Cresent Blood Bankl<br>\
     <a href="https://g.page/the-crescent-blood-bank-nanded?share">Get Directions</a>', 19.150093821525537, 77.32266930177933]
    ];
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: center
    });
  var infowindow =  new google.maps.InfoWindow({});
  var marker, count;
  for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        title: locations[count][0]
      });
  google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][0]);
          infowindow.open(map, marker);
        }
      })(marker, count));
    }
  }

  
export default Map;