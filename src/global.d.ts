import { Skeletor } from './install';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $skeletor: Skeletor
  }
}