"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function LeafletMap() {
  const [isClient, setIsClient] = useState(false);
  const position = [31.582045, 74.329376]; // Lahore, Pakistan

  // This ensures the map only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render nothing on the server

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              You are viewing <strong>Lahore</strong>!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
