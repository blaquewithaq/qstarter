import { defineConfig } from "bunup";

export default defineConfig([
	{
		name: "library",
		entry: "src/index.ts",
		format: ["esm"],
		target: "node",
		dts: true,
	},
	{
		name: "binary",
		entry: "src-cli/cli.ts",
		format: ["esm"],
		target: "node",
		dts: false,
	},
]);
