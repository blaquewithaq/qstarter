import { defineWorkspace } from "bunup";

export default defineWorkspace([
	{
		name: "example",
		root: "packages/example",
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
