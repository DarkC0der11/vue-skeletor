import './Skeletor.scss';
import { defineComponent, CSSProperties, inject } from 'vue';
import { convertToUnit } from '../../helpers';
import { skeletorOptionsProvide, SkeletorOptions } from '../../install';

const Skeletor = defineComponent({
  name: 'Skeletor',

  props: {
    circle: {
      type: Boolean,
      default: false,
    },

    size: {
      type: [String, Number],
      default: null,
    },

    width: {
      type: [String, Number],
      default: null,
    },

    height: {
      type: [String, Number],
      default: null,
    },

    shimmer: {
      type: Boolean,
      default: undefined,
    }
  },

  setup(props) {
    const skeletorOptions = inject<SkeletorOptions>(skeletorOptionsProvide, { shimmer: true });
    const isRect = !props.circle && (props.size || props.height || (props.width && props.height));
    const isText = !props.circle && !props.size && !props.height;

    const classes = {
      'vue-skeletor': true,
      'vue-skeletor--rect': isRect,
      'vue-skeletor--text': isText,
      'vue-skeletor--circle': props.circle,
      'vue-skeletor--shimmer': props.shimmer !== undefined ? props.shimmer : skeletorOptions.shimmer,
    };

    const style: CSSProperties = {};

    if(props.size) {
      style.width = convertToUnit(props.size);
      style.height = convertToUnit(props.size);
    } 

    if(!props.size && props.width) {
      style.width = convertToUnit(props.width);
    }

    if(!props.size && props.height) {
      style.height = convertToUnit(props.height);
    }

    return () => (
      <span class={classes} style={style}>
        {isText ? '\u200C' : null}
      </span>
    )
  },
});

export default Skeletor;

