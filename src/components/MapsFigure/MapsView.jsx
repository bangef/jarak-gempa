import {
	TileLayer,
	Marker,
	Popup,
	Polyline,
	Tooltip,
	MapContainer,
} from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import ParagrafPopup from "./ParagrafPopup";
import Button from "../Button";
import { GiEarthCrack, GiPathDistance, BiCurrentLocation } from "../icons";
import { euclideanDist } from "../../utils";
import { markerQuake } from "../images";
import MyPositionMarker from "./MyPositionMarker";

export default function MapsView({ dataGempa, myCoorLat, myCoorLong }) {
	const mapsRef = useRef();
	const redOptions = { color: "red" };
	const [position, setPosition] = useState([0, 0]);
	const [stateGempa, setStateGempa] = useState(null);
	const [statePolyline, setStatePolyline] = useState(null);
	const [distance, setDistance] = useState("");
	const [showUpdateGempa, setShowUpdateGempa] = useState(false);
	const [showDistance, setShowDistance] = useState(false);
	const ZOOM_LEVEL = 14;

	const handlerInformasiUser = () => {
		const map = L.map("test");
		map.flyTo([myCoorLat, myCoorLong], ZOOM_LEVEL, {
			animate: true,
		});
	};

	const markerQ = new L.Icon({
		iconUrl: markerQuake,
		iconSize: [30, 47.5],
		iconAnchor: [14, 49],
	});

	useEffect(() => {
		setPosition(dataGempa[0].coordinates);
		setStateGempa(dataGempa);
		setStatePolyline([[myCoorLat, myCoorLong], dataGempa[0].coordinates]);
		setDistance(
			euclideanDist(myCoorLat, myCoorLong, ...dataGempa[0].coordinates)
		);
	}, [dataGempa, myCoorLat, myCoorLong]);

	return (
		<>
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				className="w-full h-full rounded-lg"
				id="test"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MyPositionMarker coordinates={[myCoorLat, myCoorLong]} />
				{stateGempa &&
					showUpdateGempa &&
					stateGempa.map((g, index) => (
						<Marker
							position={g.coordinates}
							key={`${g.coordinates}-${index}`}
							icon={markerQ}
						>
							<Popup>
								<ParagrafPopup
									paragrafContent="Tanggal dan Jam"
									spanContent={`${g.tanggal} ${g.jam} `}
								/>
								<ParagrafPopup
									paragrafContent="Skala Magnitudo"
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
								<ParagrafPopup
									paragrafContent="Gambar"
									spanContent={
										<a href={g.image} target="_blank">
											Lihat
										</a>
									}
								/>
							</Popup>
						</Marker>
					))}
				{/* {stateMyCoordinate && (
					<Marker position={stateMyCoordinate} icon={markerU}>
						<Popup>
							
						</Popup>
					</Marker>
				)} */}
				{statePolyline && showDistance && showUpdateGempa && (
					<Polyline pathOptions={redOptions} positions={statePolyline}>
						<Tooltip>
							<h1 className="text-sm  text-start">
								Perkiran Jarak <br />
								dengan pengukuran <br />
								Euclidean :
							</h1>
							<p className="font-bold text-slate-500">{distance} KM</p>
						</Tooltip>
					</Polyline>
				)}
			</MapContainer>
			<div className="w-full grid grid-row-1 gap-6 sm:grid-cols-2 my-10">
				<Button
					className="w-full"
					onClick={() => setShowUpdateGempa(!showUpdateGempa)}
				>
					<div className="w-full flex gap-2 justify-center">
						<GiEarthCrack className="text-2xl hidden sm:block" />
						<span>Tampilkan Update Gempa Bumi Indonesia</span>
					</div>
				</Button>
				<Button
					className="w-full"
					onClick={() => setShowDistance(!showDistance)}
				>
					<div className="w-full flex gap-2 justify-center">
						<GiPathDistance className="text-2xl hidden sm:block" />
						<span>Tampilkan Jarak Gempa terbaru dengan lokasi anda</span>
					</div>
				</Button>
			</div>
			<div className="mt-4 w-full border sm:hidden"></div>
		</>
	);
}
