import { SkeletorOptions } from 'types';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $skeletor: SkeletorOptions
  }
}