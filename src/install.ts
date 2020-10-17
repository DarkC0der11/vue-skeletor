import { reactive } from 'vue';
import { SkeletorSymbol } from './constants';
import { SkeletorPlugin, SkeletorOptions } from 'types';

const SkeletorPlugin: SkeletorPlugin = {
  install(app, options: SkeletorOptions = {}) {
    app.provide(SkeletorSymbol, reactive<SkeletorOptions>({
      shimmer: true,
      ...options,
    }));
  }
}

export default SkeletorPlugin;