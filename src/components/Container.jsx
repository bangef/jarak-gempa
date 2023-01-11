import { createElement } from "react";
import { twm } from "../utils";

export default function Container({ className: c, children, ...props }) {
	const className = twm("mx-auto p-4", c);
	return createElement("div", { ...props, className }, children);
}
