# 💀 Vue Skeletor (Vue 3 Skeleton Loading component)

Vue 3 adaptive skeleton loading component that will match your typography. 

[Codesandbox Card Example](https://codesandbox.io/s/epic-ishizaka-nl9z3?file=/src/App.vue) 

## Installation
`npm install vue-skeletor -S`

## Why adaptive skeletons?
Skeletons are used to mimic how the real content would look, so in order to create nice skeleton you would have to manually create squares, circles and position/size them to match your real component and keep it updated whenever you change it. 

Aww sounds awful isn't it? 

Wouldn't be nice if you had a skeleton that automatically adjusts to your existing components layout? I think it would =) so the Vue Skeletor comes to rescue. 

Instead of creating separate skeleton components you can inject skeletons directly into your existing components.

Example: 

```html
  <template>
    <div class="post">
      <div class="post__image">
        <img 
          v-if="post" 
          :src="post.img"
          height="200"
        />

        <!-- A simple 200px height rect which mimics the post image  -->
        <Skeletor v-else-if="isPostLoading" height="200"/>
      </div>
        
      <div class="post__title">
        <template v-if="post">
          {{ post.title }}
        </template>

        <Skeletor v-else-if="isPostLoading">
      </div>

      <div class="post__text">
        <template v-if="post">
          {{ post.text }}
        </template>

        <template v-else-if="isPostLoading">
          <!-- Creating 5 skeletons that mimics the text -->
          <Skeletor v-for="i in 5">
        </template>
      </div>
    </div>
  </template>
```

And that's it, the text skeletons will automatically catch up with the styles you defined for the title and text elements.

## Basic Usage

First import the Skeletor styles

```js
  import 'vue-skeletor/dist/vue-skeletor.css';
```

Option 1 - Register Locally 

```js
  // SomeComponent.vue
  import { Skeletor } from 'vue-skeletor';

  export default {
    components: { Skeletor }
  }
```

Option 2 - Register Globally

```js
  // main.js
  import { Skeletor } from 'vue-skeletor';

  app.component(Skeletor.name, Skeletor);
```

```html
  <!-- And use in your <template> or JSX -->
  <Skeletor /> 
```
## Global Configuration
If you want you can globally turn off the shimmer animation using the Skeletor Plugin
usage. 

```js
  // Import the plugin
  import VueSkeletor from 'vue-skeletor';

  // Register plugin in your vue app
  app.use(VueSkeletor, {
    shimmer: false,
  })
```

## useSkeletor
When you install skeletor as Plugin it `provides` global config to your app and you get access to 'useSkeletor' composable which will inject the `skeletor` config object through which you can set any global config at runtime.

```js
  // Import the composable
  import { useSkeletor } from 'vue-skeletor';

  export default defineComponent({
    setup() {
      // In your setup function use the composable
      const skeletor = useSkeletor();

      // Set the shimmer config
      skeletor.shimmer = false;
    }
  })
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
  <!-- Creates a 100x100 square -->
  <Skeletor size="100"/>
```

Size sets both `width` & `height` to simplify creating square/circle shapes

## Circle
`circle`: boolean (default: false)

```html
  <!-- Creates a 50x50 circle -->
  <Skeletor circle size="50"/>
```

As the name suggest it just turns the element into a circle, use only when `width` & `height` or size is set.

## Pill
`pill`: boolean (default: false)

```html
  <Skeletor width="200" height="50" pill/>
```

Makes rectangular skeletons fully rounded, useful when creating rounded button or chip 
and e.t.c shapes.

## Shimmer
`shimmer`: boolean 

```html
  <Skeletor :shimmer="false"/>
```

Optionally you can turn off/on specific skeleton's shimmer animation, it is based of 
your global config, if you disable shimmer globally, then this prop should be set 
accordingly.

## As
`as`: string (default: 'span')

```html
  <Skeletor :size="100" as="div"/>
```

By default skeletons are rendered as `span` tags, but you can change it
using this prop.

## Customizing the style and animation
Skeletor uses bem classes, that you can use to override your skeletons color and shimmer animation and you have the full control over how your skeletons look, there is no need for any javascript api for this in my opinion.

```css
  /* Static background */
  .vue-skeletor {
    background-color: #ccc;
  }

  /* 
    If you have theme switching in your app for example
    from light to dark, you can target skeletons under 
    some global theme class or attribute e.g. 
  */
  [data-theme="dark"] .vue-skeletor {
    background: #363636;
  }

  /* 
    Text skeleton
    By default skeletor uses fully rounded style for text
    type skeletons, you can change that as you like
  */
  .vue-skeletor--text {
    /* Completely square style skeletons */
    border-radius: 0;
  }

  /* Shimmer */
  .vue-skeletor:not(.vue-skeletor--shimmerless):after {
    /* 
      Change the shimmer color, its a simple 90 deg 
      linear horizontal gradient, adjust it however
      you like.
    */
    background: linear-gradient(
      90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,1) 50%, 
      rgba(255,255,255,0) 100%
    );

    /* Change any css keyframes animation property */
    animation-duration: 2s; 
    animation-timing-function: ease-in-out;
    /* ... */

    /* 
      Or implement your custom shimmer css animation 
      if you want it's pure css no magic happening =)
    */
  }

  /* Default keyframes used in skeletor */
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
```