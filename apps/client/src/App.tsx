import { FC, useEffect, useState } from "react";

import nestjsLogo from "./assets/nestjs.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { GET, URLVersions, AxiosResponse } from "./api/helper";

const App: FC = () => {
	const [count, setCount] = useState(0);

	const server = async (): Promise<void> => {
		try {
			const response = await GET({ url: "/", version: URLVersions.V1 });
			console.log("Server response:", (response as AxiosResponse).data);
		} catch (error) {
			console.error(`Failed to get server response: ${error}`);
		}
	};

	useEffect(() => {
		server();
	}, []);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://nestjs.com/" target="_blank">
					<img src={nestjsLogo} className="logo nest" alt="NestJS logo" />
				</a>
			</div>
			<h1>Vite + React + Nest</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
};

export { App };
