import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import "./Map.css";
import styles from './autocomplete.module.css';
import './Map.css'

const Listing = ({ places }) => (
  <ul>{places.map(p => <li key={p.id}>{p.name} Address: {p.vicinity}</li>)}</ul>
);

class Contents extends React.Component {
  state = {
    position: null,
    showingInfoWindow: false,
    activeMarker: {},
    //mapCenter: {lat: 44.1, lng: -93.8},
    selectedPlace: {},
    places: []
  };


  componentDidMount() {
    this.renderAutoComplete();                   
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) return;
      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      this.setState({ position: place.geometry.location });
    });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
    console.log("This props onMapClicked event ", props) 
  };

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '8000',
      type: ['pharmacy']
    };
    
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results});
    });
  };

  render() {
    const { position } = this.state;

    return (
      <div>
        <div className={styles.left}>
          <form id="mapForm" onSubmit={this.onSubmit}>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
            />

            <input className={styles.button} type="submit" value="Go" />
          </form>

          {/* <div>
            <div>Lat: {position && position.lat()}</div>
            <div>Lng: {position && position.lng()}</div>
          </div> */}
        </div>

<<<<<<< HEAD
        <div className={styles.right}>
          <Map
            {...this.props}
            center={position}
            centerAroundCurrentLocation={false}
            google={this.props.google}
            // ====================================== 
            zoom={14}
            style={{width: '600px', height: '600px', position: 'relative'}}
            initialCenter={{lat: 44.986656, lng: -93.258133}}
            //center={this.state.mapCenter}
            //onClick={this.onMapClicked}
            onClick={this.onMapReady}
            //onReady={this.onMapReady}
            // ====================================== 
            containerStyle={{
              height: '100vh',
              position: 'relative',
              width: '100%'
            }}>
            <Marker position={position} />
            <Listing places={this.state.places} />
          </Map>
=======
        <div className="something">
            <Map
              {...this.props}
              google={this.props.google}
              center={position}
              centerAroundCurrentLocation={false}
              zoom={14}
              style={{width: '800px', height: '600px', position: 'relative'}}
              
              initialCenter={{lat: 44.986656, lng: -93.258133}}
              //onClick={this.onMapClicked}
              onClick={this.onMapReady}
              //onReady={this.onMapReady} 
              >
              <Marker position={position} />
              <Listing places={this.state.places} />
            </Map>
>>>>>>> master
        </div>
      </div>
    );
  }
}

const MapWrapper = props => (
  <Map className="map" google={props.google} visible={false}>
    <Contents {...props} />
  </Map>
);

export default GoogleApiWrapper({
    apiKey: "AIzaSyC99-il86HHVwFx3f2Mwcj3xCsuJmgFBDQ"
  })(MapWrapper)

