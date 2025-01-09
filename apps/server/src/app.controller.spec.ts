import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";

describe("AppController", () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [],
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	describe("root", () => {
		it("should return Machine Status", () => {
			const status = appController.main();

			expect(status).toEqual("Server running");
		});
	});
});
