import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//引入svg需要用到插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
///mock插件提供方法
// import { viteMockServe } from "vite-plugin-mock";
import * as path from "path";
// https://vitejs.dev/config/
export default () => {
  return {
    compilerOptions: {
      "target": "esnext",
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
      }),
      // viteMockServe({
      //   //default
      //   mockPath: 'mock',
      //   enable: true,
      // }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss"; ',
        },
      },
    },
  };
};
