import { defineConfig } from "@solidjs/start/config";
import babel from 'vite-plugin-babel';

export default defineConfig({
  vite: {
    plugins: [babel({babelConfig: {
      plugins: ['@babel/plugin-syntax-import-attributes', '@babel/plugin-syntax-jsx']
    }})]
  }
});
