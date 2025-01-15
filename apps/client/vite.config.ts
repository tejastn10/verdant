import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	if (command === "serve") {
		// Development specific config
		return {
			// Server configuration
			server: {
				port: 3000, // Port for the dev server
				hmr: true, // Enable Hot Module Replacement
			},
			// Plugins
			plugins: [react()],
			// Resolve configuration
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "src"), // Shorten the import path for src directory
				},
			},
			// ? Uncomment this for local development or add localhost to CORS options
			// Proxy server for API requests
			// proxy: {
			// 	"/api": {
			// 		target: "http://localhost:5000", // Server URL
			// 		changeOrigin: true,
			// 		rewrite: (path: string) => path.replace(/^\/api/, ""),
			// 	},
			// },
		};
	} else {
		// Build specific config
		return {
			build: {
				outDir: "dist",
				sourcemap: false, // You can change to true if you need sourcemaps in production
				rollupOptions: {
					input: {
						main: path.resolve(__dirname, "index.html"),
					},
					output: {
						chunkFileNames: "assets/js/[name]-[hash].js",
						entryFileNames: "assets/js/[name]-[hash].js",
						assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
					},
				},
			},
			plugins: [react()],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "src"),
				},
			},
		};
	}
});
