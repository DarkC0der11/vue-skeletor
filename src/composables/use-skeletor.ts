import { inject, warn } from 'vue';
import { SkeletorSymbol } from '../constants';
import { SkeletorOptions } from 'types';
import { DEFAULT_OPTIONS } from '../constants';

export default function useSkeletor() {
  const skeletor = inject<SkeletorOptions>(SkeletorSymbol, DEFAULT_OPTIONS);

  if(!skeletor) {
    warn('Skeletor is not installed on this Vue application.');
  }

  return skeletor;
}