import React from "react";
import Image from "next/image";

const GoToPrevious = () => {
	return (
		<div>
			<Image
				src="/assets/icons/left-arrow.svg"
				alt="previous"
				className=""
				width={88}
				height={48}
				priority
			/>
		</div>
	);
};

export default GoToPrevious;
