import React, { PureComponent } from "react";
import { Marker } from "react-map-gl";

export default class Markers extends PureComponent {
  render() {
    const { data } = this.props;
    // return data.map(city => (
    return (
      <Marker key={data.id} longitude={data.longitude} latitude={data.latitude}>
        <div>You are here</div>
      </Marker>
    );
  }
}
