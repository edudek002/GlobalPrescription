  import React from "react"
  //import MapWrapper from "./MapAutocomplete";
  import {Map, InfoWindow, Marker, onReady, GoogleApiWrapper} from 'google-maps-react';
  import "./Map.css";
  import styles from './autocomplete.module.css';
  

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
  // ==========From Autocomplete ============
  // componentDidMount() {
  //   this.renderAutoComplete();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props !== prevProps.map) this.renderAutoComplete();
  // }

  // onSubmit(e) {
  //   e.preventDefault();
  // }

  // renderAutoComplete() {
  //   const { google, map } = this.props;

  //   if (!google || !map) return;

  //   const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
  //   autocomplete.bindTo('bounds', map);

  //   autocomplete.addListener('place_changed', () => {
  //     const place = autocomplete.getPlace();

  //     if (!place.geometry) return;

  //     if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
  //     else {
  //       map.setCenter(place.geometry.location);
  //       map.setZoom(17);
  //     }

  //     this.setState({ position: place.geometry.location });
  //   });
  // }

  

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
    //======= from Autocomplete=======
    //const { position } = this.state;
    //================================

    console.log("This state activeMarker is", this.state.activeMarker)
    console.log("This state mapCenter is", this.state.mapCenter)
    console.log("This state myLoc is", this.state.myLoc)
    console.log("This state selectedPlace is", this.state.selectedPlace)
    console.log("This state places is", this.state.places)
    console.log("This state FIRST places is", this.state.places[0])
  

    //console.log("this.props ", this.props.google.maps.places.PlacesService.length)
    return (
    //====from Autocomplete==============
      // <div className={styles.flexWrapper}>
      //   <div className={styles.left}>
      //     <form onSubmit={this.onSubmit}>
      //       <input
      //         placeholder="Enter a location"
      //         ref={ref => (this.autocomplete = ref)}
      //         type="text"
      //       />

      //       <input className={styles.button} type="submit" value="Go" />
      //     </form>

      //     <div>
      //       <div>Lat: {position && position.lat()}</div>
      //       <div>Lng: {position && position.lng()}</div>
      //     </div>
      //   </div>

      //   <div className={styles.right}>
        

      <Map className="map" 
        google={this.props.google} 
        zoom={14}
        style={{width: '100%', height: '600px', position: 'relative'}}
        initialCenter={{lat: 44.85477, lng: -93.258000	}}
        center={this.state.mapCenter}
        const myLoc={this.state.mapCenter}
        onClick={this.onMapClicked}
        onReady={this.onMapReady}

        //===from Autocomplete==========
        // {...this.props}
        //     center={position}
        //     centerAroundCurrentLocation={false}
        //     containerStyle={{
        //       height: '100vh',
        //       position: 'relative',
        //       width: '100%'
        //     }}
        //==================================
        >
        {/* <Marker position={position}/> */}
        <Listing places={this.state.places} />

        {/* <Marker onClick={this.onMarkerClick}
                places={this.state.places}
                name={"first marker"}
                position={this.state.mapCenter} />

        <Marker onClick={this.onMarkerClick}
                name={'Second Marker'}
                position={{lat: 44.85477, lng: -93.258000}} /> */}
 
        <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            {/* {<div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>} */}
        </InfoWindow>
      </Map>
    //===================
    //   </div>
    // </div>
    // =================    
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
  
  
  


    
  
