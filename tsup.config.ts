import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	ignoreWatch: ["node_modules"],
	splitting: true,
	sourcemap: true,
	clean: true,
	tsconfig: "./tsconfig.json",
});
