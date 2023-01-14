import MapsView from "./MapsView";

export default function index(props) {
	return (
		<div className="w-full md:h-[50vh] sm:h-[70vh] h-[80vh] rounded-lg border-4 p-2 border-dashed border-gray-500">
			<MapsView {...props} />
		</div>
	);
}
