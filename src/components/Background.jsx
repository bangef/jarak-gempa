import { createElement } from "react";
import { twm } from "../utils";

export default function Background({ className: c, children, ...props }) {
	const className = twm(
		"bg-gradient-to-r from-gray-700 via-gray-900 to-black",
		c
	);
	return createElement("main", { className, ...props }, children);
}
