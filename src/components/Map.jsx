import React, { Component } from 'react';
import { Map,Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};

export class MapContainer extends Component {
  render() {
    var points = [
      { lat: 19.16763801279376, lng: 77.30548535338062 },
      { lat: 19.165683594382372, lng: 77.30595560666669 },
      { lat: 19.15815678275278, lng: 77.30901251566065 },
      { lat: 19.1498250495134, lng: 77.32361768957165 },
      { lat: 19.150093821525537, lng: 77.32266930177933 }]
  var bounds = new this.props.google.maps.LatLngBounds();
  for (var i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
  }
    return (
      <div>
        <h6>In Case of Emergrncy</h6>
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 19.160473,
            lng: 77.306946
          }}
        bounds={bounds}>
          <Marker
    title={'Nanded Blood Bank<br>\
    <a href="https://goo.gl/maps/uM5C8GJHNye2n9sR9">Get Directions</a>'}
    position={{ lat: 19.16763801279376, lng: 77.30548535338062}} />
    <Marker
    title={'Jijai Blood Center<br>\
    <a href="https://goo.gl/maps/ChYbWidJKYFRwy668">Get Directions</a>'}
    position={{ lat: 19.165683594382372, lng: 77.30595560666669}} />
    <Marker
    title={'Arpan Blood Bank<br>\
    <a href="https://goo.gl/maps/gFoqZNdPQtRAaGHA6">Get Directions</a>'}
    position={{ lat: 19.15815678275278, lng: 77.30901251566065}} />
    <Marker
    title={'Huzur Saheb Blood Bank<br>\
    <a href="https://goo.gl/maps/fb6hq88e1ydYDWAr6">Get Directions</a>'}
    position={{ lat: 19.1498250495134, lng: 77.32361768957165}} />
    <Marker
    title={'The Cresent Blood Bankl<br>\
    <a href="https://g.page/the-crescent-blood-bank-nanded?share">Get Directions</a>'}
    position={{ lat: 19.150093821525537, lng: 77.32266930177933}} />
    <Marker
    title={'Gurugobind Singhji Blood Bank<br>\
    <a href="https://goo.gl/maps/gekr1c577j4SmM5d6">Get Directions</a>'}
    position={{ lat: 19.162161905313987, lng:77.30368942608797}} />
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB9tf0LTQh512Vu_y-YKZLU1pLxei6AMJ0'
})(MapContainer);
