import { inject, warn } from 'vue';
import { SkeletorSymbol } from '../constants';
import { SkeletorOptions } from 'types';

export default function useSkeletor() {
  const skeletor = inject<SkeletorOptions>(SkeletorSymbol);

  if(!skeletor) {
    warn('Skeletor is not installed on this Vue application.');
  }

  return skeletor;
}