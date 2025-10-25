import { defineConfig } from "bunup";

export default defineConfig({
	name: "library",
	entry: "src/index.ts",
	format: ["esm"],
	target: "node",
	dts: true,
});
