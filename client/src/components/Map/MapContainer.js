  import React from "react";
  import {Map, InfoWindow, Marker, onReady, GoogleApiWrapper} from 'google-maps-react';
  import "./Map.css";

  const Listing = ({ places }) => (
    <ul>{places.map(p => <li key={p.id}>{p.name} ________Address: {p.vicinity}, {p.geometry.location.lat}</li>)}</ul>
  );
   
class MapContainer extends React.Component {

  state = {
          showingInfoWindow: false,
          activeMarker: {},
          //mapCenter: {lat: -0.717178, lng: 36.431026}, 
          //myLoc: {lat: -0.717178, lng: 36.431026},
          mapCenter: {lat: 44.85477, lng: -93.258000},
          myLoc: {lat: 44.85477, lng: -93.258000}, 
          selectedPlace: {},
          places: [], 
          myLat: ""      
  }

  

// fetchPlaces(mapProps, map) {
//   const {google} = mapProps;
//   const service = new google.maps.places.PlacesService(map);
//   // ...
// }

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
    console.log("This props mapCenter lat ", props.center.lat)
    console.log("This props My places number ", props.google.maps.places.PlacesService.length)
    console.log("This props My places name ", props.google.maps.places.PlacesService.name)  
  };

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '10000',
      type: ['pharmacy']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results});
    });
  };

  render() {
    console.log("This state activeMarker is", this.state.activeMarker)
    console.log("This state mapCenter is", this.state.mapCenter)
    console.log("This state myLoc is", this.state.myLoc)
    console.log("This state selectedPlace is", this.state.selectedPlace)
    console.log("This state places is", this.state.places)
    console.log("This state FIRST places is", this.state.places[0])
  

    //console.log("this.props ", this.props.google.maps.places.PlacesService.length)
    return (
      <Map className="map" 
        google={this.props.google} 
        zoom={14}
        style={{width: '100%', height: '600px', position: 'relative'}}
        initialCenter={{lat: 44.85477, lng: -93.258000	}}
        center={this.state.mapCenter}
        const myLoc={this.state.mapCenter}
        onClick={this.onMapClicked}
        onReady={this.onMapReady}
        >
        
        <Listing places={this.state.places} />

        <Marker onClick={this.onMarkerClick}
                places={this.state.places}
                name={"first marker"}
                position={this.state.mapCenter} />

        <Marker onClick={this.onMarkerClick}
                name={'Second Marker'}
                position={{lat: 44.85477, lng: -93.258000}} />
 
        <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            {/* {<div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>} */}
        </InfoWindow>
      </Map>
    );
  }
}


 
export default GoogleApiWrapper({
  apiKey: "AIzaSyC99-il86HHVwFx3f2Mwcj3xCsuJmgFBDQ"
})(MapContainer)


//Places API key=AIzaSyC99-il86HHVwFx3f2Mwcj3xCsuJmgFBDQ

//Map API key=AIzaSyApu_fsoWF0jqAI5bZVZ5hiWvibSNrFmms


  
  // The ...props means, spread all of the passed props onto this element
  // That way we don't have to define them all individually
  
  
  


    
  
