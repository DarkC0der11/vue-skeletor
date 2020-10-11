# 💀 Vue Skeletor (Vue 3 Skeleton Loading component)

Vue 3 adaptive skeleton loading component that will match your typography. 

## Installation
`npm install vue-skeletor -S`

## Basic Usage

Import the component locally or register it globally if you like.

```jsx
  // Import the component
  import { Skeletor } from 'vue-skeletor';

  // Register it
  export default {
    components: { Skeletor }
  }
```

```html
  <!-- And use in your <template> or JSX -->
  <Skeletor /> 
```

## Width
`width`: number | string 

```html
  <!-- Both are same and evaluate to 100px -->
  <Skeletor width="100"/>
  <Skeletor :width="100"/>

  <!-- Any valid css value for width property -->
  <Skeletor width="50%">
```

Width of your skeleton, can be a number or css string value.

## Height
`height`: number | string 

```html
  <!-- Both are same and evaluate to 100px -->
  <Skeletor height="100"/>
  <Skeletor :height="100"/>

  <!-- Any valid css value for width property -->
  <Skeletor height="50%">
```

Height of your skeleton, can be a number or css string value.

### ⚠️ Notice
When you set height, your skeleton automatically becomes a rect with `display: 
block` meaning it will no longer adapt to your typography, which is useful for 
creating non text block level skeletons like image placeholders, buttons, and e.t.c.

## Size
`size`: number | string 

```html
  <Skeletor size="100"/>
```

Size sets both `width` & `height` to simplify creating square/circle shapes

## Circle
`circle`: boolean 

```html
  <!-- Creates a 50x50 circle -->
  <Skeletor circle size="50"/>
```

As the name suggest it just turns the element into a circle, use only when `width` & `height` or size is set.