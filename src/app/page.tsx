"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./views/navbar/navbar";
import GoToNext from "./components/goToNext";
import GoToPrevious from "./components/goToPrevious";

export default function Home() {
	const bgImages = [
		"url('/assets/images/background-1.png')",
		"url('/assets/images/background-2.png')",
		"url('/assets/images/background-3.png')",
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const [isUserInteracting, setIsUserInteracting] = useState(false);

	const goToPrevious = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + bgImages.length) % bgImages.length
		);
		setIsUserInteracting(true);
	};

	const goToNext = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
		setIsUserInteracting(true);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isUserInteracting) {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [isUserInteracting]);

	return (
		<main
			className="min-h-screen"
			style={{
				backgroundImage: bgImages[currentImageIndex],
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				opacity: 1,
			}}
		>
			<Navbar />
			<section className="container pt-[8.125rem] transition-opacity duration-500">
				<div className="xl:w-[52.5625rem]">
					<h2 className="text-primary font-bold text-[5rem] leading-tight pb-4">
						Where Class meets Safety
					</h2>
					<p className="text-primary text-base w-[80%] pb-14">
						A celebrity like you should always show up with the perfect car and
						detail from us, smashing those events like the star you are!
					</p>

					<button className="bg-primary text-sec-100 text-base font-medium px-10 py-6 rounded-sm hover:bg-slate-200">
						EXPLORE OPTIONS
					</button>
				</div>
				<div className="flex flex-row gap-14 justify-end pt-[7.625rem]">
					<button onClick={goToPrevious} className="text-primary text-2xl mr-4">
						{<GoToPrevious />}
					</button>
					<button onClick={goToNext} className="text-primary text-2xl">
						{<GoToNext />}
					</button>
				</div>
			</section>
		</main>
	);
}
