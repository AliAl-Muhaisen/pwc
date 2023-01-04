import ReactMapGl, {
  Marker,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "./geocoder";

interface Props {
  long?: number;
  lat?: number;
}

const Map = (props: Props) => {
  return (
    <div>
      <ReactMapGl
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: props?.long ?? -122.4,
          latitude: props?.lat ?? 37.8,
          zoom: 14,
        }}
        style={{ height: 500 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker latitude={37.8} longitude={-122.4} />
        <NavigationControl position="bottom-right" />
        <GeolocateControl position="top-left" />
        <Geocoder />
      </ReactMapGl>
    </div>
  );
};

export default Map;
