// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://64bit.io",
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
		assets: "_astro",
	},
	vite: {
		build: {
			cssCodeSplit: true,
			minify: "esbuild",
		},
	},
});
