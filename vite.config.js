import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://mooo-3.github.io/First-challenge-in-react/", // استبدل repository-name باسم مستودع GitHub
});
