import { defineComponent } from 'vue';
import { Skeletor, useSkeletor } from '../src';
import './index.scss';

export default defineComponent({
  name: 'Playground',

  data: () => ({}),

  setup() {
    const skeletor = useSkeletor();
  },

  render() {
    return [
      <div style="width: 300px; margin: 0 auto;">
        <div style="margin-bottom: 12px;">
          <Skeletor height="200"/>
        </div>

        <div class="d-flex align-center" style="margin-bottom: 12px;">
          <Skeletor circle size={48} class="flex-shrink-0"/>
          <div style="margin-left: 12px;"class="flex-grow-1">
            <h2 style="margin: 0">
              <Skeletor width="50%"/>
            </h2>
            <p style="margin: 0;">
              <Skeletor width="75%"/>
            </p>
          </div>
        </div>
      
        <p style="margin: 0 0 12px 0; line-height: 1.5">
          <Skeletor />
          <Skeletor />
          <Skeletor />
          <Skeletor />
        </p>

        <div class="d-flex justify-end">
          <Skeletor width={96} height={36} pill style="margin-right: 4px;"/>
          <Skeletor width={96} height={36} pill/>
        </div>
      </div>
    ];
  }
});