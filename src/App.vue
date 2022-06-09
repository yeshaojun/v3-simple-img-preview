<template>
  <button @click="preview">预览图片</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { previewImage } from "./plugin/index";
@Options({
  methods: {
    preview() {
      previewImage({
        current: 1,
        urls: [
          "https://c-ssl.duitang.com/uploads/item/201912/28/20191228105602_4Wm5z.jpeg",
          "https://c-ssl.duitang.com/uploads/blog/202107/03/20210703145407_8a8cc.jpg",
        ],
      });
    },
  },
})
export default class App extends Vue {}
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
</style>
