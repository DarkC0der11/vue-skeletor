import './index.scss';
import { createApp } from 'vue';
import Playground from './Playground';
import VueSkeletor from 'vue-skeletor';

const app = createApp(Playground);

app.use(VueSkeletor);

app.mount(document.querySelector('#app'));