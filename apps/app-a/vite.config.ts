import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["@managing-typescript-packages-in-monorepos/lib-a",
      "@managing-typescript-packages-in-monorepos/lib-b",
      "@managing-typescript-packages-in-monorepos/lib-c"]
  }
});