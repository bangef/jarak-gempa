import React from "react";
import { MutatingDots } from "react-loader-spinner";

export default function Loader() {
	return (
		<>
			<MutatingDots
				height="100"
				width="100"
				color="white"
				secondaryColor="black"
				radius="12.5"
				ariaLabel="mutating-dots-loading"
				visible={true}
			/>
		</>
	);
}
