import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			// with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
			"/api": {
				target: "https://data.bmkg.go.id",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	plugins: [react()],
});
