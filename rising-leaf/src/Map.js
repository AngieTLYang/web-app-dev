// Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issues with Webpack
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Map = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/markers') // Ensure this URL matches your backend's URL
      .then(response => response.json())
      .then(data => setMarkers(data))
      .catch(error => console.error('Error fetching markers:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  console.log(markers);
  return (
    <div style={{ width: '600px', height: '400px', float: 'left' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
        <Marker key={marker._id} position={marker.position}>
            <Popup>
            <strong>{marker.name}</strong><br />
            {marker.popup}
            </Popup>
        </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;