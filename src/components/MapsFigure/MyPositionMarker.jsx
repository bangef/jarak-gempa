import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import * as L from "leaflet";
import { markerUser } from "../images";

export default function MyPositionMarker({ coordinates }) {
	const map = useMap();
	map.flyTo(coordinates, map.getZoom());

	const markerU = new L.Icon({
		iconUrl: markerUser,
		iconSize: [30, 47.5],
		iconAnchor: [14, 49],
	});
	return (
		<Marker position={coordinates} icon={markerU}>
			<Popup>You are here</Popup>
		</Marker>
	);
}
