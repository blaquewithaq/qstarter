import { anonymizeIp } from "./anon";
import { generateUUID } from "./uuid";

export * from "./anon";
export * from "./uuid";

export interface ToolMethods {
	anonymizeIp: (ip: string, salt: string) => string;
	generateUUID: () => string;
}

export function createToolMethods(): ToolMethods {
	return {
		anonymizeIp,
		generateUUID,
	};
}
