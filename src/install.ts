import { Plugin, reactive } from 'vue';
import { SkeletorSymbol } from './constants';
import { Skeletor } from './types';

const SkeletorPlugin: Plugin = {
  install(app, options: Skeletor = {}) {
    app.provide(SkeletorSymbol, reactive<Skeletor>({
      shimmer: true,
      color: 'rgb(238, 238, 238)',
      shimmerColor: 'rgb(255, 255, 255)',
      ...options,
    }));
  }
}

export default SkeletorPlugin;