import React from "react";
import Image from "next/image";

const GoToNext = () => {
	return (
		<div>
			<Image
				src="/assets/icons/right-arrow.svg"
				alt="next"
				className=""
				width={112}
				height={56}
				priority
			/>
		</div>
	);
};

export default GoToNext;
