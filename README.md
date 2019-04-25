# vue-mediaelement
video live player

## Install

```bash
$ npm install vue-mediaelement
```

## Import

### Import using module

Import components to your project:

``` js
require('vue-mediaelement/dist/vue-mediaelement.css');

// in ES6 modules
import { Mediaelement } from 'vue-mediaelement';

// in CommonJS
const { Mediaelement } = require('vue-mediaelement');

// in Global variable
const { Mediaelement } = VueMediaelement;
```

And register components:

``` js
Vue.component('mediaelement', Mediaelement);
```

### Import using script tag

``` html
<link rel="stylesheet" href="../node-modules/vue-mediaelement/dist/vue-mediaelement.css" charset="utf-8">
<script src="../node-modules/vue-mediaelement/dist/vue-mediaelement.js"></script>
```

``` js
const vueMediaelement = VueMediaelement.Mediaelement;

new Vue({
  el: 'body',
  components: {
    'mediaelement': vueMediaelement
  }
});
```

## Usage

Work on a Vue instance:

```HTML
<mediaelement class="my-play"></mediaelement>
```

```CSS
.my-play {
  height: 200px;
  text-align: center;
}
```

## Options

### Props

| Option | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| source | String | Specifies the URL of the video file; this value can also be indicated with source tags (refer to the Multiple Codecs section for more information) | '' |
| width | String | Sets the width of the video player in pixels; you can also indicate percentages | 480 |
| height | String | Sets the height of the video player in pixels; you can also indicate percentages | 270 |
| preload | String | Specifies if and how the author thinks the video should be loaded when the page loads; possible values: `auto`, `metadata` or `none` (recommended) | none |
| autoplay | Boolean | Specifies that the video will start playing as soon as it is ready | false |
| forceLive | Boolean | If set to true, the Live Broadcast message will be displayed and progress bar will be hidden, no matter if duration is a valid number | true |

### Events

| Event Name | Type | Description |
| ----- | ----- | ----- |
| success | callback | Action(s) that will be executed as soon as the source is loaded; passes 2 arguments: media (the wrapper that mimics all the native events/properties/methods for all renderers) and node (the original HTML video, audio or iframe tag where the media was loaded originally; if html5 is being used, media and node are the basically the same) |
| error | callback | Action(s) that will be executed if source doesn't load for any reason. Passes same arguments as success |


## FAQ

### How to programminly mediaelement to an item?

Use ref and call `remove()` method.

``` js
this.$refs.mediaelement.remove(newIndex)
```

For more details, please refer to example code.

## Development

Watching with hot-reload:

```bash
$ npm run dev
```

Develop on real remote device:

```bash
$ npm run remote-dev {{ YOUR IP ADDRESS }}
```

## License

MIT