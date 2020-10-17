import { reactive } from 'vue';
import { SkeletorSymbol } from './constants';
import { SkeletorPlugin, SkeletorOptions } from 'types';
import { DEFAULT_OPTIONS } from './constants';

const SkeletorPlugin: SkeletorPlugin = {
  install(app, options: SkeletorOptions = {}) {
    app.provide(SkeletorSymbol, reactive<SkeletorOptions>({
      ...DEFAULT_OPTIONS,
      ...options,
    }));
  }
}

export default SkeletorPlugin;