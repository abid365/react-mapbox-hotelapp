import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";

// custom marker
const customIcon = new Icon({
  iconUrl: "/rec.png",
  iconSize: [16, 16],
});

const markers = [
  {
    geocode: [-37.781, 145.009],
    popUp: "Richmond",
  },
  {
    geocode: [-37.869, 145.009],
    popUp: "Fitzroy",
  },
  {
    geocode: [-37.781, 144.926],
    popUp: "Collingwood",
  },

  {
    geocode: [-37.822, 144.969],
    popUp: "Southbank",
  },
  {
    geocode: [-37.77, 144.942],
    popUp: "North Melbourne",
  },
  {
    geocode: [-37.825, 144.945],
    popUp: "Docklands",
  },
  {
    geocode: [-37.752, 144.92],
    popUp: "Flemington",
  },
  {
    geocode: [-37.83, 145.037],
    popUp: "South Yarra",
  },

  {
    geocode: [-37.838, 144.882],
    popUp: "West Melbourne",
  },
  {
    geocode: [-37.867, 145.026],
    popUp: "Toorak",
  },
  {
    geocode: [-37.791, 145.031],
    popUp: "Fitzroy North",
  },
  {
    geocode: [-37.857, 145.019],
    popUp: "Prahran",
  },
  {
    geocode: [-37.845, 145.044],
    popUp: "Albert Park",
  },
  {
    geocode: [-37.844, 144.908],
    popUp: "South Melbourne",
  },
  {
    geocode: [-37.861, 144.936],
    popUp: "Middle Park",
  },
  {
    geocode: [-37.881, 144.977],
    popUp: "St Kilda",
  },
  {
    geocode: [-37.821, 144.853],
    popUp: "Port Melbourne",
  },
];

const MapOpenLayer = () => {
  return (
    <MapContainer
      className="h-[100%]"
      center={[-37.814, 144.962]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=B2YJmNNxhMAGXcYTIf4y"
      />
      {markers.map((locator, i) => (
        <Marker key={i} position={locator.geocode} icon={customIcon}>
          <Popup>{locator.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapOpenLayer;
