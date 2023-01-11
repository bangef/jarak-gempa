import { createElement } from "react";
import { twm } from "../utils";

export default function Button({ className: c, children, ...props }) {
	const className = twm(
		`py-2.5 px-4 bg-blue-500 rounded-lg shadow-lg shadow-blue-500`,
		"font-medium text-white text-sm",
		`hover:bg-blue-700`,
		`focus:ring-4 focus:ring-blue-300 focus:outline-none`,
		c
	);
	return createElement(
		"button",
		{ type: "button", className, ...props },
		children
	);
}
