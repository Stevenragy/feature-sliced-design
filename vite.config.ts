import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@pages": "/src/pages", // Replace '/src/pages' with the actual path to your pages directory
        },
    },
});
