<template>
  <button @click="preview">预览图片</button>
  <ysj-swipe class="my-swipe">
    <ysj-swipe-item> 1 </ysj-swipe-item>
    <ysj-swipe-item> 2 </ysj-swipe-item>
    <ysj-swipe-item> 3 </ysj-swipe-item>
    <ysj-swipe-item> 4 </ysj-swipe-item>
  </ysj-swipe>
</template>

<script lang="ts">
import { previewImage } from "./plugin/index";
import ysjSwipe from "./components/swipe/index.vue";
import ysjSwipeItem from "./components/swipeItem/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    ysjSwipe,
    ysjSwipeItem,
  },
  methods: {
    preview() {
      previewImage({
        current: 1,
        maxZoom: 10,
        urls: [
          "https://imgcrm.nbdeli.com/100016551/xq.jpg",
          "https://sandbox.rsvp.ai/media/resources/738754654560858112",
          "https://img2.baidu.com/it/u=3990732507,3148015412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        ],
        fail: (e) => {
          console.log("e", e);
        },
      });
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my-swipe .ysj-swipe-item:nth-child(1) {
  background-color: red;
}
.my-swipe .ysj-swipe-item:nth-child(2) {
  background-color: yellow;
}
</style>
