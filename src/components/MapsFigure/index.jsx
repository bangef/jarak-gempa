import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import ParagrafPopup from "./ParagrafPopup";

export default function MapsFigure({ dataGempa, myCoorLat, myCoorLong }) {
	const [position, setPosition] = useState([-2.49, 117.97]);
	const [stateGempa, setStateGempa] = useState(null);
	const [stateMyCoordinate, setStateMyCoordinate] = useState(null);
	useEffect(() => {
		setPosition(dataGempa[0].coordinates);
		setStateGempa(dataGempa);
		setStateMyCoordinate([myCoorLat, myCoorLong]);
	}, [dataGempa, myCoorLat, myCoorLong]);

	return (
		<div className="w-full md:h-[50vh] sm:h-[70vh] h-[80vh] rounded-lg border-4 p-2 border-dashed border-gray-500">
			<MapContainer
				center={position}
				zoom={4}
				scrollWheelZoom={true}
				className="w-full h-full rounded-lg"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{stateGempa &&
					stateGempa.map((g, index) => (
						<Marker position={g.coordinates} key={`${g.coordinates}-${index}`}>
							<Popup>
								<ParagrafPopup
									paragrafContent="Tanggal"
									spanContent={g.tanggal}
								/>
								<ParagrafPopup
									paragrafContent="Skala"
									spanContent={g.magnitude}
								/>
								<ParagrafPopup
									paragrafContent="Dirasakan"
									spanContent={g.dirasakan}
								/>
								<ParagrafPopup
									paragrafContent="Kedalaman"
									spanContent={g.kedalaman}
								/>
								<ParagrafPopup
									paragrafContent="Wilayah"
									spanContent={g.wilayah}
								/>
							</Popup>
						</Marker>
					))}
				{stateMyCoordinate && (
					<Marker position={stateMyCoordinate}>
						<Popup>
							<ParagrafPopup paragrafContent="Ini Saya Halo" />
						</Popup>
					</Marker>
				)}
			</MapContainer>
		</div>
	);
}
