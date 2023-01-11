import { createElement } from "react";
import { twm } from "../../utils";
import MutatingDots from "./Loader";

export default function index({ className: c }) {
	const className = twm(
		"w-full h-[50vh]",
		"flex justify-center items-center",
		c
	);
	return createElement("div", { className }, <MutatingDots />);
}
