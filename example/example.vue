<template>
  <div>
  <h4><a id="video-player" class="anchor" href="#video-player" aria-hidden="true">
      <span aria-hidden="true" class="octicon octicon-link"></span></a>
      <div class="clearfix">
          <span class="title">Video Player</span>
          <select name="player1-sources" id="player1-sources" v-model="selected">
              <option value="">Select source</option>
              <option :value="item.value" v-for="(item,index) in sources" :key="index">{{item.name}}</option>
          </select>
      </div>
    </h4>
    <mediaelement ref="vPlay" :autoplay="true" :forceLive="forceLive" preload="true" :source="selected" width="500px" height="500px"></mediaelement>
    <button @click="close">关闭播放</button>
    <button @click="live">切换进度</button>
  </div>
</template>

<script>
import { Mediaelement } from '../src';
export default {
  data() {
    return {
      selected: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
      forceLive: false,
      autoplay: true,
      sources: [{
        name: 'MP4',
        value: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      }, {
        name: 'HLS',
        value: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'
      }, {
        name: 'FLV',
        value: 'https://github.com/mediaelement/mediaelement-files/blob/master/guqin.flv'
      }, {
        name: 'M(PEG)-DASH',
        value: 'http://www.bok.net/dash/tears_of_steel/cleartext/stream.mpd'
      }, {
        name: 'DailyMotion',
        value: 'https://www.dailymotion.com/video/x11prnt'
      }, {
        name: 'YouTube',
        value: 'https://www.youtube.com/embed/SLUamynqaKM'
      }, {
        name: 'Vimeo',
        value: 'https://player.vimeo.com/video/108018156?title=0&amp;byline=0&amp;portrait=0&amp;badge=0'
      }, {
        name: 'Facebook',
        value: 'https://www.facebook.com/facebook/videos/10155278547321729'
      }, {
        name: 'Twitch',
        value: 'https://www.twitch.tv/videos/109010497'
      }, {
        name: 'WebM',
        value: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Volcano_Lava_Sample.webm'
      }, {
        name: 'RTMP',
        value: 'rtmp://184.72.239.149/vod/BigBuckBunny_115k.mov'
      }]
    };
  },
  components: {
    mediaelement: Mediaelement
  },
  mounted() {
    console.log(this.$refs.vPlay.Features('isIE'));
  },
  methods: {
    live() {
      this.forceLive = true;
    },
    close() {
      console.log(this.$refs);
      this.$refs.vPlay.remove();
    }
  },
  watch: {
    selected: function (newQuestion, oldQuestion) {
      console.log('new', newQuestion);
      console.log('old', oldQuestion);
      this.forceLive = true;
    }
  }
};
</script>
