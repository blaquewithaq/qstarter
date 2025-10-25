import { defineWorkspace } from "bunup";

export default defineWorkspace([
	{
		name: "database",
		root: "packages/database",
		config: [
			{
				name: "library",
				entry: "src/index.ts",
				format: "esm",
				target: "node",
				dts: true,
			},
		],
	},
]);
