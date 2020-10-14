import { inject, warn } from 'vue';
import { SkeletorSymbol } from '../constants';
import { Skeletor } from '../types';

export default function useSkeletor() {
  const skeletor = inject<Skeletor>(SkeletorSymbol);

  if(!skeletor) {
    warn('Skeletor is not installed on this Vue application.');
  }

  return skeletor;
}