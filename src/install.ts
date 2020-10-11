import { Plugin } from 'vue';

export const skeletorOptionsProvide = Symbol('SkeletorOptionsProvide');

export interface SkeletorOptions {
  shimmer?: boolean
}

const SkeletorPlugin: Plugin = {
  install(app, options: SkeletorOptions = { shimmer: true }) {
    app.provide(skeletorOptionsProvide, options);
  }
}

export default SkeletorPlugin;