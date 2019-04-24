<template>
  <video :height="height" :width="width" :autoplay="autoplay" :preload="preload" >
  </video>
</template>

<style>
.mejs__container {
  min-width: auto !important;
}
.mejs__overlay-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
:not([style*='display: none']).mejs__controls {
  background: none !important;
}
.mejs__controls div{
  display: inline-block;
}
.mejs__time-rail {
  width: 50%;
}
.mejs__fullscreen > button {
    background-position: -80px 0 !important;
}
mediaelementwrapper,mediaelementwrapper > div {
  height: 100%;
  display: block;
}
mediaelementwrapper object{
  width: 100% !important;
  height: 100% !important;
}
</style>

<script>
// import flvjs from 'flv.js';
// import hlsjs from 'hls.js';
import 'mediaelement';
import 'mediaelement/build/mediaelementplayer.min.css';
// import 'mediaelement/build/mediaelement-flash-video.swf';
// import 'mediaelement/build/mediaelement-flash-video-hls.swf';

export default {
  props: {
    source: {
      type: String,
      required: true,
      default: ''
    },
    width: {
      type: String,
      required: false,
      default: 'auto'
    },
    height: {
      type: String,
      required: false,
      default: 'auto'
    },
    preload: {
      type: String,
      required: false,
      default: 'none'
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    forceLive: {
      type: Boolean,
      required: false,
      default: true
    },
    success: {
      type: Function,
      default() {
        return false;
      }
    },
    error: {
      type: Function,
      default() {
        return false;
      }
    }
  },
  data: () => ({
    player: null,
  }),
  mounted() {
    const {MediaElementPlayer} = global;
    // window.flvjs = flvjs;
		// window.Hls = hlsjs;
    this.player = new MediaElementPlayer(this.$el, {
      // renderers: [''],
      pluginPath: 'https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/',
      shimScriptAccess: 'always',
      forceLive: this.forceLive,
      // (by default, this is set as `sameDomain`)
      // shimScriptAccess: 'always',
      success: (mediaElement, originalNode, instance) => {
        this.success(mediaElement, originalNode, instance);
      },
      error: (e) => {
        this.error(e);
      }
    });
    // if (this.player) {
      // this.player.on("play", () => {
      //   this.$emit("play");
      // });
    // }
  },
  methods: {
    Features(key) {
      const {mejs} = global;
      return mejs.Features[key];
    },
    remove() {
      this.player.remove();
    }
  },
  beforeDestroy() {
    this.remove();
  },
  watch: {
    source: function (newSource) {
      // console.log('source new', newSource);
      // console.log('source old', oldSource);
      this.player.setSrc(newSource);
      this.player.setPoster('');
      this.player.load();
    }
  },
};
</script>
