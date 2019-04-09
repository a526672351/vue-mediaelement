<template>
  <video width="320" height="240">
    <!-- <source
      type="video/mp4"
      src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    /> -->
    <!-- <source type="video/youtube"
      src="http://www.youtube.com/watch?v=nOEw9iiopwI"
    /> -->
    <object width="320" height="240" type="application/x-shockwave-flash" data="/dist/mediaelement-flash-video.swf">
        <param name="movie" value="/dist/mediaelement-flash-video.swf" />
        <param name="flashvars" value="controls=true&file=https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
        <!-- Image as a last resort -->
        <!-- <img src="myvideo.jpg" width="320" height="240" title="No video playback capabilities" /> -->
    </object>
  </video>
</template>

<script>
// import flvjs from 'flv.js';
import hlsjs from 'hls.js';
import 'mediaelement';
import 'mediaelement/build/mediaelementplayer.min.css';
import 'mediaelement/build/mediaelement-flash-video.swf';
import 'mediaelement/build/mediaelement-flash-video-hls.swf';

export default {
  data: () => ({
    player: null
  }),
  mounted() {
    const {MediaElementPlayer} = global;
    // const {MediaElementPlayer, mejs} = global;
    // window.flvjs = flvjs;
		window.Hls = hlsjs;
    this.player = new MediaElementPlayer(this.$el, {
      pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
      // (by default, this is set as `sameDomain`)
      shimScriptAccess: 'always',
      success: function(mediaElement, originalNode, instance) {
        console.log(mediaElement, originalNode, instance);
      }
    });
    if (this.player) {
      // this.player.on("play", () => {
      //   this.$emit("play");
      // });
    }
  },
  beforeDestroy() {
    this.player.remove();
  }
};
</script>
