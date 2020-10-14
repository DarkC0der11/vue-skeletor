import path from 'path';
import typescript from 'rollup-plugin-typescript';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss'
import alias from '@rollup/plugin-alias';

const typescriptPlugin = typescript({
  tsconfig: './',
});

const babelPlugin = babel({
  babelrc: true,
  extensions: ['.jsx', '.tsx', '.ts', '.js']
});

const aliasPlugin = alias({
  entries: [
    { find: '@', replacement: path.resolve(__dirname, 'src') },
  ]
});

const plugins = [
  typescriptPlugin,
  babelPlugin,
  aliasPlugin,
  scss({
    output: 'dist/vue-skeletor.css',
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/vue-skeletor.esm.js'
    },
    plugins,
    external: ['vue'],
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
      file: 'dist/vue-skeletor.cjs.js',
    },
    plugins,
    external: ['vue'],
  }
]