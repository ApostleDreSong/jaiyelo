import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/utils/provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import axios from "axios";
import { retrieveFromSessionStorage } from "@/utils/sessionStorage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

	axios.interceptors.request.use(
		(config) => {
			// Retrieve user data from sessionStorage
			const userData = retrieveFromSessionStorage("user");
			const { token } = userData;
			// If user data exists and contains a token, add Authorization header to the request
			if (token) {
				config.headers.Authorization = `Bearer ${userData.token}`;
			}

			return config;
		},
		(error) => {
			// Do something with the request error
			return Promise.reject(error);
		}
	);

	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>
					<AntdRegistry>{children}</AntdRegistry>
				</QueryProvider>
			</body>
		</html>
	);
}
