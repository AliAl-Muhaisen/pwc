const MapBoxGeocoder = require("@mapbox/mapbox-gl-geocoder");
import { useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
const Geocoder = () => {
  const mapController = new MapBoxGeocoder({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string,
    marker: false,
    collapsed: true,
  });

  useControl(() => mapController);
  return null;
};
export default Geocoder;
