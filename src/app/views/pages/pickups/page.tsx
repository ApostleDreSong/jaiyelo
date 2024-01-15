"use client";

import BackHome from "@/app/components/backHome";
import { pickupImages } from "@/app/data/images";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const Pickups = () => {
	return (
		<main className="bg-black min-h-screen">
			<BackHome />
			<div className="container py-20">
				<div className="xl:w-[52.5625rem]">
					<h2 className="text-primary font-bold text-[5rem] leading-tight pb-4">
						Pickups-Prado
					</h2>
					{/* <ul className="text-primary text-base w-[80%] pb-14">
						<li>~ 8 wheel car tank</li>
						<li>~ 8 wheel car tank</li>
						<li>~ 8 wheel car tank</li>
						<li>~ 8 wheel car tank</li>
					</ul> */}
					<Row
						className="py-8"
						gutter={16}
					>
						{pickupImages.map((pickup, idx) => (
							<>
								<Col span={8}>
									<Card
										// title="Card title"
										bordered={false}
									>
										<Image
											src={pickup.image}
											alt="suvs"
											className=""
											width={550}
											height={100}
											priority
										/>
									</Card>
								</Col>
							</>
						))}
					</Row>

					<button className="bg-primary text-sec-100 text-base font-medium px-10 py-6 rounded-sm hover:bg-slate-200">
						EXPLORE OPTIONS
					</button>
				</div>
			</div>
		</main>
	);
};

export default Pickups;
