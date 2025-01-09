import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
	constructor() {}

	@Get()
	main(): string {
		return "Server running";
	}
}
