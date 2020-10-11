import './index.scss';
import { createApp } from 'vue';
import Playground from './Playground';
import VueSkeletor from '../src';

const app = createApp(Playground);

app.use(VueSkeletor, { shimmer: false });

app.mount(document.querySelector('#app'));