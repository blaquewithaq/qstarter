import { type Client, type ClientOptions, useClient } from "./client";
import { createToolMethods, type ToolMethods } from "./tools";

export * from "./client";
export * from "./supabase";
export * from "./tools";

export interface DatabaseMethods {
	client: Client;
	tool: ToolMethods;
}

export type DatabaseHelpers<
	T extends Record<string, unknown> = Record<string, never>,
> = DatabaseMethods & T;

export function useDatabase<
	T extends Record<string, unknown> = Record<string, never>,
>(options: ClientOptions, helpers?: T): DatabaseHelpers<T> {
	const base = {
		client: useClient(options),
		tool: createToolMethods(),
	};

	return {
		...base,
		...helpers,
	} as DatabaseHelpers<T>;
}
