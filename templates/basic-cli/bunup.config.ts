import { defineConfig } from "bunup";

export default defineConfig({
	name: "binary",
	entry: "src/index.ts",
	format: ["esm"],
	target: "node",
	dts: false,
});
