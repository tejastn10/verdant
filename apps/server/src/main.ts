import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { Logger } from "@nestjs/common";

const bootstrap = async (): Promise<void> => {
	const FastifyModule = new FastifyAdapter();

	const PORT = 5000;
	const MODE = "development";

	const app = await NestFactory.create<NestFastifyApplication>(AppModule, FastifyModule);
	await app.listen(
		{
			port: PORT,
		},
		(error, address) => {
			if (error) {
				Logger.error(`Failed to start server: ${error.message}`, "Server");
				return;
			}

			Logger.verbose(`Server listening on port:${PORT}`, "SERVER");
			Logger.verbose(`IPv4: http://localhost:${PORT}`, "SERVER");
			Logger.verbose(`IPv6: ${address}`, "SERVER");

			Logger.debug(`Server running in ${MODE} mode`, "SERVER");
		}
	);
};

bootstrap();
