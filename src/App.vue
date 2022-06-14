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
        urls: [
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2012-3-2%2Fenterdesk.com-B526ECADD33DBD367676A93E051BA1EC.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657767801&t=b1f4c5be860caf2d1dac70b52f2b9765",
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
