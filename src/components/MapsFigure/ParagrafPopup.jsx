import { createElement } from "react";
import { twm } from "../../utils";
import SpanPopup from "./SpanPopup";

export default function ParagrafPopup({
	className: c,
	spanContent: sc,
	paragrafContent: pc,
	...props
}) {
	const className = twm(c);
	return createElement(
		"p",
		{ className, ...props },
		pc,
		<SpanPopup>
			<br />
			{sc}
		</SpanPopup>
	);
}
