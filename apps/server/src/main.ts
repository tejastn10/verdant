import { NestFactory } from "@nestjs/core";
import { Logger, ValidationPipe } from "@nestjs/common";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

import { CorsOptions, NestOptions, ValidationPipeOptions } from "./options";

import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
	const FastifyModule = new FastifyAdapter();

	// Enabling things for Fastify server
	FastifyModule.enableCors(CorsOptions);

	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		FastifyModule,
		NestOptions
	);

	// Middlewares & Pipes
	app.useGlobalPipes(new ValidationPipe(ValidationPipeOptions));

	// Config implementation
	const PORT = 5000;
	const MODE = "development";

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
