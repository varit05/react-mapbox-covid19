import React, { Component } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer
} from "./Layers";

import Markers from "./Markers";
import { GeoData } from "../data/GeoJson";

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS;

export class Map extends Component {
  state = {
    viewport: {
      latitude: 40.67,
      longitude: -103.59,
      zoom: 3,
      bearing: 0,
      pitch: 0
    }
  };

  _sourceRef = React.createRef();

  _onViewportChange = viewport => this.setState({ viewport });
  render() {
    const { viewport } = this.state;
    return (
      <>
        <ReactMapGL
          {...viewport}
          width="100vw"
          height="100vh"
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this._onViewportChange}
        >
          <Source
            type="geojson"
            // data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
            data={GeoData}
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
            ref={this._sourceRef}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
        </ReactMapGL>
      </>
    );
  }
}
