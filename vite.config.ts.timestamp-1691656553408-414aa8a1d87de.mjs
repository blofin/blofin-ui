// vite.config.ts
import react from "file:///Users/zoe/Desktop/blofin/blofin-ui/node_modules/@vitejs/plugin-react-swc/index.mjs";
import fs from "fs";
import path from "path";
import tailwindcss from "file:///Users/zoe/Desktop/blofin/blofin-ui/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///Users/zoe/Desktop/blofin/blofin-ui/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/zoe/Desktop/blofin/blofin-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import svgr from "file:///Users/zoe/Desktop/blofin/blofin-ui/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "/Users/zoe/Desktop/blofin/blofin-ui";
function addEntryFiles() {
  const componentsDir = path.join(__vite_injected_original_dirname, "src/components");
  const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
  const entry = {
    index: path.resolve(__vite_injected_original_dirname, "src/index.ts")
  };
  const exports = {
    ".": "./dist/index.es.js",
    "./blofin.css": "./dist/blofin.css",
    "./theme": "./dist/config/theme.js"
  };
  for (const componentDir of componentDirs) {
    const indexPath = path.join(componentsDir, componentDir, "index.ts");
    if (fs.existsSync(indexPath)) {
      entry[componentDir] = path.resolve(__vite_injected_original_dirname, `src/components/${componentDir}/index.ts`);
      exports[`./${componentDir}`] = `./dist/${componentDir}.es.js`;
    }
  }
  const packageJsonPath = path.join(__vite_injected_original_dirname, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  packageJson.exports = exports;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  return entry;
}
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      skipDiagnostics: true
      // beforeWriteFile: (filePath, content) => {
      //   console.log(filePath);
      // },
    }),
    // chunkSplitPlugin({
    //   strategy: "unbundle",
    //   customChunk: (args) => {
    //     // files into src directory is export in single files
    //     let { file, id, moduleId, root } = args;
    //     if (file.startsWith("src/")) {
    //       file = file.substring(4);
    //       file = file.replace(/\.[^.$]+$/, "");
    //       return file;
    //     }
    //     return null;
    //   },
    // }),
    svgr({
      exportAsDefault: true
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup.ts"]
  },
  build: {
    sourcemap: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: addEntryFiles(),
      name: "blofin-ui",
      // the proper extensions will be added
      // formats: ["es", "umd"],
      formats: ["es"],
      fileName: (format) => `[name].${format}.js`
      // fileName: (format, entryName) => {
      //   if (entryName === "index") {
      //     return `index.${format}.js`;
      //   } else {
      //     return `components/[name]/index.${format}.js`;
      //   }
      // },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "tailwindcss", "react-hook-form", "zod"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
          "react-hook-form": "react-hook-form",
          zod: "zod"
        },
        assetFileNames: "blofin.css"
        // chunkFileNames: "[name].js",
        // manualChunks: undefined,
        // inlineDynamicImports: false,
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvem9lL0Rlc2t0b3AvYmxvZmluL2Jsb2Zpbi11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3pvZS9EZXNrdG9wL2Jsb2Zpbi9ibG9maW4tdWkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3pvZS9EZXNrdG9wL2Jsb2Zpbi9ibG9maW4tdWkvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcblxuZnVuY3Rpb24gYWRkRW50cnlGaWxlcygpIHtcbiAgY29uc3QgY29tcG9uZW50c0RpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHNcIik7XG5cbiAgLy8gR2V0IGFsbCBkaXJlY3RvcmllcyBpbiBzcmMvY29tcG9uZW50c1xuICBjb25zdCBjb21wb25lbnREaXJzID0gZnNcbiAgICAucmVhZGRpclN5bmMoY29tcG9uZW50c0RpciwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgLmZpbHRlcigoZGlyZW50KSA9PiBkaXJlbnQuaXNEaXJlY3RvcnkoKSlcbiAgICAubWFwKChkaXJlbnQpID0+IGRpcmVudC5uYW1lKTtcblxuICAvLyBJbml0aWFsaXplIGVudHJ5IG9iamVjdCB3aXRoIGluZGV4LnRzIGVudHJ5XG4gIGNvbnN0IGVudHJ5ID0ge1xuICAgIGluZGV4OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKVxuICB9O1xuXG4gIC8vIEluaXRpYWxpemUgZXhwb3J0cyBvYmplY3RcbiAgY29uc3QgZXhwb3J0cyA9IHtcbiAgICBcIi5cIjogXCIuL2Rpc3QvaW5kZXguZXMuanNcIixcbiAgICBcIi4vYmxvZmluLmNzc1wiOiBcIi4vZGlzdC9ibG9maW4uY3NzXCIsXG4gICAgXCIuL3RoZW1lXCI6IFwiLi9kaXN0L2NvbmZpZy90aGVtZS5qc1wiXG4gIH07XG5cbiAgLy8gQ2hlY2sgZWFjaCBjb21wb25lbnQgZGlyZWN0b3J5IGZvciBhbiBpbmRleC50cyBmaWxlXG4gIGZvciAoY29uc3QgY29tcG9uZW50RGlyIG9mIGNvbXBvbmVudERpcnMpIHtcbiAgICBjb25zdCBpbmRleFBhdGggPSBwYXRoLmpvaW4oY29tcG9uZW50c0RpciwgY29tcG9uZW50RGlyLCBcImluZGV4LnRzXCIpO1xuICAgIGlmIChmcy5leGlzdHNTeW5jKGluZGV4UGF0aCkpIHtcbiAgICAgIGVudHJ5W2NvbXBvbmVudERpcl0gPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBgc3JjL2NvbXBvbmVudHMvJHtjb21wb25lbnREaXJ9L2luZGV4LnRzYCk7XG4gICAgICBleHBvcnRzW2AuLyR7Y29tcG9uZW50RGlyfWBdID0gYC4vZGlzdC8ke2NvbXBvbmVudERpcn0uZXMuanNgO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBwYWNrYWdlLmpzb24gd2l0aCBuZXcgZXhwb3J0cyBmaWVsZFxuICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcInBhY2thZ2UuanNvblwiKTtcbiAgY29uc3QgcGFja2FnZUpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYWNrYWdlSnNvblBhdGgsIFwidXRmLThcIikpO1xuICBwYWNrYWdlSnNvbi5leHBvcnRzID0gZXhwb3J0cztcbiAgZnMud3JpdGVGaWxlU3luYyhwYWNrYWdlSnNvblBhdGgsIEpTT04uc3RyaW5naWZ5KHBhY2thZ2VKc29uLCBudWxsLCAyKSk7XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICBza2lwRGlhZ25vc3RpY3M6IHRydWVcbiAgICAgIC8vIGJlZm9yZVdyaXRlRmlsZTogKGZpbGVQYXRoLCBjb250ZW50KSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGZpbGVQYXRoKTtcbiAgICAgIC8vIH0sXG4gICAgfSksXG4gICAgLy8gY2h1bmtTcGxpdFBsdWdpbih7XG4gICAgLy8gICBzdHJhdGVneTogXCJ1bmJ1bmRsZVwiLFxuICAgIC8vICAgY3VzdG9tQ2h1bms6IChhcmdzKSA9PiB7XG4gICAgLy8gICAgIC8vIGZpbGVzIGludG8gc3JjIGRpcmVjdG9yeSBpcyBleHBvcnQgaW4gc2luZ2xlIGZpbGVzXG4gICAgLy8gICAgIGxldCB7IGZpbGUsIGlkLCBtb2R1bGVJZCwgcm9vdCB9ID0gYXJncztcbiAgICAvLyAgICAgaWYgKGZpbGUuc3RhcnRzV2l0aChcInNyYy9cIikpIHtcbiAgICAvLyAgICAgICBmaWxlID0gZmlsZS5zdWJzdHJpbmcoNCk7XG4gICAgLy8gICAgICAgZmlsZSA9IGZpbGUucmVwbGFjZSgvXFwuW14uJF0rJC8sIFwiXCIpO1xuICAgIC8vICAgICAgIHJldHVybiBmaWxlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBudWxsO1xuICAgIC8vICAgfSxcbiAgICAvLyB9KSxcbiAgICBzdmdyKHtcbiAgICAgIGV4cG9ydEFzRGVmYXVsdDogdHJ1ZVxuICAgIH0pXG4gIF0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzc11cbiAgICB9XG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gICAgc2V0dXBGaWxlczogW1wiLi9zcmMvc2V0dXAudHNcIl1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXG4gICAgICBlbnRyeTogYWRkRW50cnlGaWxlcygpLFxuICAgICAgbmFtZTogXCJibG9maW4tdWlcIixcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgICAvLyBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiXSxcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBbbmFtZV0uJHtmb3JtYXR9LmpzYFxuICAgICAgLy8gZmlsZU5hbWU6IChmb3JtYXQsIGVudHJ5TmFtZSkgPT4ge1xuICAgICAgLy8gICBpZiAoZW50cnlOYW1lID09PSBcImluZGV4XCIpIHtcbiAgICAgIC8vICAgICByZXR1cm4gYGluZGV4LiR7Zm9ybWF0fS5qc2A7XG4gICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgcmV0dXJuIGBjb21wb25lbnRzL1tuYW1lXS9pbmRleC4ke2Zvcm1hdH0uanNgO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9LFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInRhaWx3aW5kY3NzXCIsIFwicmVhY3QtaG9vay1mb3JtXCIsIFwiem9kXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgIHRhaWx3aW5kY3NzOiBcInRhaWx3aW5kY3NzXCIsXG4gICAgICAgICAgXCJyZWFjdC1ob29rLWZvcm1cIjogXCJyZWFjdC1ob29rLWZvcm1cIixcbiAgICAgICAgICB6b2Q6IFwiem9kXCJcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYmxvZmluLmNzc1wiXG4gICAgICAgIC8vIGNodW5rRmlsZU5hbWVzOiBcIltuYW1lXS5qc1wiLFxuICAgICAgICAvLyBtYW51YWxDaHVua3M6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gaW5saW5lRHluYW1pY0ltcG9ydHM6IGZhbHNlLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBUmpCLElBQU0sbUNBQW1DO0FBVXpDLFNBQVMsZ0JBQWdCO0FBQ3ZCLFFBQU0sZ0JBQWdCLEtBQUssS0FBSyxrQ0FBVyxnQkFBZ0I7QUFHM0QsUUFB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
