import { createElement } from "react";
import { twm } from "../../utils";

export default function SpanPopup({ className: c, children, ...props }) {
	const className = twm("font-bold text-red-700 text-sm", c);
	return createElement("span", { className, ...props }, children);
}
