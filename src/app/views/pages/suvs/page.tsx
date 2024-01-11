import BackHome from "@/app/components/backHome";

const SuvPage = () => {
	return (
		<main className="bg-black h-screen">
			<BackHome />
			<div className="container py-28">
				<div className="xl:w-[52.5625rem]">
					<h2 className="text-primary font-bold text-[5rem] leading-tight pb-4">
						SUVs-Prado
					</h2>
					<ul className="text-primary text-base w-[80%] pb-14">
						<li>~ 8 wheel car tank</li>
						<li>~ 8 wheel car tank</li>
						<li>~ 8 wheel car tank</li>
						<li>~ 8 wheel car tank</li>
					</ul>

					<button className="bg-primary text-sec-100 text-base font-medium px-10 py-6 rounded-sm hover:bg-slate-200">
						EXPLORE OPTIONS
					</button>
				</div>
			</div>
		</main>
	);
};

export default SuvPage;
