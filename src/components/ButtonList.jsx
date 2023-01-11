import Button from "./Button";
import { FaRoad } from "react-icons/fa";
import { GiEarthCrack } from "react-icons/gi";

export default function ButtonList() {
	return (
		<div className="w-full gap-6 grid grid-cols-1 my-4 sm:grid-cols-2">
			<Button>
				<div className="w-full flex gap-2 justify-center">
					<FaRoad className="text-2xl" />
					<span>Tampilkan Jalan Tol</span>
				</div>
			</Button>
			<Button>
				<div className="w-full flex gap-2 justify-center">
					<GiEarthCrack className="text-2xl" />
					<span>Tampilkan Gempa Bumi</span>
				</div>
			</Button>
		</div>
	);
}
