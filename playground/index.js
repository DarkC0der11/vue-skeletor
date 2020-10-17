import { createApp } from 'vue';
import Playground from './Playground';
import VueSkeletor from '../src';

const app = createApp(Playground);
app.use(VueSkeletor);

app.mount(document.querySelector('#app'));