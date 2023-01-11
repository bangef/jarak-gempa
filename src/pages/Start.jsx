import Background from "../components/Background";
import Container from "../components/Container";
import Img from "../assets/bg-1.webp";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Start() {
	const navigate = useNavigate();

	const navigateToMap = () => {
		navigate("/maps");
	};

	return (
		<Background img={Img}>
			<Container className="max-w-sm h-screen grid grid-cols-1 place-content-center">
				<h1 className="font-bold text-3xl text-center text-white mb-20">
					Jarak Gempa
				</h1>
				<Button onClick={navigateToMap}>Mulai</Button>
			</Container>
		</Background>
	);
}
