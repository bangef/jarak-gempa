import Container from "../components/Container";
import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDGT } from "../utils";
import Background from "../components/Background";
import Loader from "../components/Loader";
import MapsFigure from "../components/MapsFigure";
import { logo } from "../components/images";

export default function Maps() {
	const [isGempadirasakan, setIsGempadirasakan] = useState(false);
	const [stateGempa, setStateGempa] = useState(null);
	const [stateMyLocation, setStateMyLocation] = useState(null);
	const { coords, isGeolocationAvailable, isGeolocationEnabled } =
		useGeolocated({
			positionOptions: {
				enableHighAccuracy: false,
			},
			userDecisionTimeout: 5000,
		});
	useEffect(() => {
		axios
			.get("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
			.then((res) => {
				setStateGempa(formatDGT(res.data.Infogempa.gempa));
				setIsGempadirasakan(true);
			});
	}, []);
	useEffect(() => {
		if (coords) {
			setStateMyLocation(coords);
		}
	}, [coords]);

	return (
		<Background className="h-full">
			<Container className="max-w-4xl">
				<header className="my-4 flex gap-5 items-center justify-center">
					<img src={logo} alt="Logo Jarak Gempa" width={50} height={50} />
					<h1 className="text-white font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl   antialiased ">
						Jarak Gempa
					</h1>
				</header>
				{!isGeolocationAvailable ? (
					<div className="flex justify-center items-center  h-[95vh]">
						<h1 className="text-white font-semibold text-3xl text-center">
							Mohon maaf, browser anda belum support! Segera update browser anda
							ke versi terbaru
						</h1>
					</div>
				) : !isGeolocationEnabled ? (
					<div className="flex justify-center items-center  h-[95vh]">
						<h1 className="text-white font-semibold text-3xl text-center">
							Aktifkan terlebih dahulu geolokasi anda!, Setelah itu refresh
							kembali browser anda
						</h1>
					</div>
				) : isGempadirasakan && stateMyLocation ? (
					<MapsFigure
						dataGempa={stateGempa}
						myCoorLat={stateMyLocation.latitude}
						myCoorLong={stateMyLocation.longitude}
					/>
				) : (
					<Loader />
				)}
			</Container>
		</Background>
	);
}
