import typescript from 'rollup-plugin-typescript';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss'

const isDev = process.env.NODE_ENV === 'development';

const typescriptPlugin = typescript({
  tsconfig: './',
});

const babelPlugin = babel({
  babelrc: true,
  extensions: ['.jsx', '.tsx', '.ts', '.js']
});

const plugins = [
  typescriptPlugin,
  babelPlugin,
  scss(),
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
]