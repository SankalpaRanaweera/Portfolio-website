// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    // Keep the server entry pointing to `src/server` for SSR error handling.
    server: { entry: "server" },
  },
  // Override Vite environments so the server build outputs to a hidden folder.
  // This prevents creation of `dist/server` while still allowing any server
  // artifacts to be generated and ignored by static hosts.
  vite: {
    environments: {
      ssr: {
        build: {
          outDir: "dist/.server"
        }
      }
    }
  }
});
