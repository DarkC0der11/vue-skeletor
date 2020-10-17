import './Skeletor.scss';
import { defineComponent, CSSProperties, computed, h } from 'vue';
import { convertToUnit } from '../../helpers';
import useSkeletor from '../../composables/use-skeletor';

const Skeletor = defineComponent({
  name: 'Skeletor',

  props: {
    as: {
      type: String,
      default: 'span'
    },

    circle: {
      type: Boolean,
      default: false,
    },

    pill: {
      type: Boolean,
      default: false
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
    const skeletor = useSkeletor()!;

    const isRect = computed(() => (
      !props.circle && (props.size || props.height)
    ));

    const isText = computed(() => (
      !props.circle && !props.size && !props.height
    ));
    
    const isShimmerless = computed(() => (
      props.shimmer !== undefined ? !props.shimmer : !skeletor.shimmer
    ));

    const classes = computed(() => ({
      'vue-skeletor': true,
      'vue-skeletor--rect': isRect.value,
      'vue-skeletor--text': isText.value,
      'vue-skeletor--shimmerless': isShimmerless.value,
      'vue-skeletor--circle': props.circle,
      'vue-skeletor--pill': props.pill,
    }));

    const style = computed(() => {
      const _style: CSSProperties = {};

      if(props.size) {
        const size = convertToUnit(props.size);
        _style.width = size;
        _style.height = size;
      } 
  
      if(!props.size && props.width) {
        _style.width = convertToUnit(props.width);
      }
  
      if(!props.size && props.height) {
        _style.height = convertToUnit(props.height);
      }

      return _style;
    });

    const children = isText.value ? '\u200C' : null;

    return () => h(props.as, {
      class: classes.value,
      style: style.value,
    }, [children]);
  },
});

export default Skeletor;

