import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.986656,
      lng: -93.258133
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyApu_fsoWF0jqAI5bZVZ5hiWvibSNrFmms" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={44.986656}
            lng={-93.258133}
            text={'MSP'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;