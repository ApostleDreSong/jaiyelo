import Image from "next/image";
import Link from "next/link";

export default function BackHome() {
	return (
		<main className="container flex flex-row justify-between items-center pt-[3.5625rem]">
			<Link
				href="/"
				className="text-white cursor-pointer flex flex-row items-center gap-[0.625rem]"
			>
				<Image
					src="/assets/icons/back-left.svg"
					alt="Logo"
					className=""
					width={24}
					height={0}
					priority
				/>
				<span>GO HOME</span>
			</Link>
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
		</main>
	);
}
