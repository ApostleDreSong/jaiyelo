import React from "react";
import Image from "next/image";

const Navbar = () => {
	return (
		<>
			<section className="container flex flex-row justify-between items-center pt-[3.5625rem]">
				<div className="text-white">MENU</div>
				<div>
					<Image
						src="/assets/logo/logo.svg"
						alt="Vercel Logo"
						className="dark:invert"
						width={52}
						height={41.89}
						priority
					/>
				</div>
			</section>
		</>
	);
};

export default Navbar;
