import { Skeletor } from 'vue-skeletor';

export default {
  name: 'Playground',

  data: () => ({
    shimmer: true,
    imgHeight: 200,
  }),

  render() {
    return [
      <button onClick={() => {
        this.shimmer = !this.shimmer;
      }}>
        Toggle shimmer
      </button>,

      <button onClick={() => {
        this.imgHeight = 400;
      }}>
        Change height
      </button>,

      <div style="width: 300px; margin: 0 auto;">
        <div style="margin-bottom: 12px;">
          <Skeletor height={this.imgHeight} shimmer={this.shimmer}/>
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
}