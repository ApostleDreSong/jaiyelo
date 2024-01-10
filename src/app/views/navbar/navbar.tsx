// import React from "react";
// import Image from "next/image";

// const Navbar = () => {
// 	return (
// 		<>
// 			<section className="container flex flex-row justify-between items-center pt-[3.5625rem]">
// 				<div className="text-white">MENU</div>
// 				<div>
// 					<Image
// 						src="/assets/logo/logo.svg"
// 						alt="Vercel Logo"
// 						className="dark:invert"
// 						width={52}
// 						height={41.89}
// 						priority
// 					/>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default Navbar;

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navlinks } from "./navlinks";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = () => {
		setIsOpen(true);
	};

	const handleCloseDrawer = () => {
		setIsOpen(false);
	};

	return (
		<>
			{/* Navigation */}
			<section className="container flex flex-row justify-between items-center pt-[3.5625rem]">
				<div onClick={handleMenuClick} className="text-white cursor-pointer">
					MENU
				</div>
				<div>
					<Image
						src="/assets/logo/logo.svg"
						alt="Logo"
						className=""
						width={52}
						height={41.89}
						priority
					/>
				</div>
			</section>

			{/* Drawer */}
			{isOpen && (
				<div
					className={`z-50 bg-black fixed top-0 left-0 h-screen w-full sm:w-[40%] md:w-[35%] lg:w-1/4 text-[#464646] transition-transform duration-300 ease-in-out transform ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="pt-10 px-16">
						<div className="flex justify-end pb-[6.25rem]">
							<button
								onClick={handleCloseDrawer}
								className="text-[#464646] text-2xl cursor-pointer"
							>
								{
									<Image
										src="/assets/icons/close-icon.svg"
										alt="close"
										className=""
										width={24}
										height={24}
										priority
									/>
								}
							</button>
						</div>
						{/* Add your drawer content here */}
						<div className="">
							{navlinks.map((navlink: any, i: number) => (
								<ul key={i}>
									<li className="pb-10 text-base md:text-2xl font-normal text-primary">
										<Link
											href={navlink.link}
											onClick={handleCloseDrawer}
											target={navlink.target}
										>
											{navlink.title}
										</Link>
									</li>
								</ul>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
