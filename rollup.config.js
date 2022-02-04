import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { terser } from 'rollup-plugin-terser';

import * as packageJson from './package.json';

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: 'src/index.ts',
    output: [
      // commonjs
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      // esmodule
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), // automatically externalize peerDependencies in a rollup bundle
      resolve(), // locates modules using the Node resolution algorithm
      commonjs(), // convert CommonJS modules to ES6
      typescript({ useTsconfigDeclarationDir: true, tsconfig: './tsconfig.json', clean: true }), // integration between rollup and typescript
      terser(), // minify generated es bundle (uses terser under the hood)
    ],
  },
  // typings
  {
    input: 'lib/types/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    plugins: [dts(), del({ targets: 'lib/types', hook: 'buildEnd' })], // roll-up .d.ts files and delete the types dir
  },
];

export default config;
