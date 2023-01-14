import Background from "../components/Background";
import Container from "../components/Container";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { logo } from "../components/images";

export default function Start() {
	const navigate = useNavigate();
	return (
		<Background>
			<Container className="max-w-sm h-screen grid grid-cols-1 place-content-center">
				<div className="w-full flex justify-center mb-4">
					<img src={logo} alt="Logo Jarak Gempa" width={100} height={100} />
				</div>
				<h1 className="font-bold text-3xl text-center text-white mb-4">
					Jarak Gempa
				</h1>
				<Button onClick={() => navigate("/maps")}>Mulai</Button>
			</Container>
		</Background>
	);
}
