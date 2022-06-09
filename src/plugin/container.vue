<template>
  <div class="ysj-image-container">
    <div class="ysj-image-container-header">
      <slot></slot>
      <div v-if="!config.header">
        {{ dataConfig.current + "/" + dataConfig.urls.length }}
      </div>
      <div class="ysj-image-opt" v-if="!config.header">
        <button @click="zoom('big')">
          <svg class="iconpark-icon"><use href="#zoom-in"></use></svg>
        </button>
        <button @click="zoom('small')">
          <svg class="iconpark-icon"><use href="#zoom-out"></use></svg>
        </button>
        <a
          :href="dataConfig.urls[dataConfig.current]"
          target="_blank"
          :download="'image' + dataConfig.current"
        >
          <svg class="iconpark-icon"><use href="#download-four"></use></svg>
        </a>
        <button @click="getFull">
          <svg class="iconpark-icon"><use href="#full-screen"></use></svg>
        </button>
        <button @click="close">
          <svg class="iconpark-icon"><use href="#close"></use></svg>
        </button>
      </div>
    </div>
    <div class="ysj-image-container-content">
      <span v-show="loading" class="loading-wrapper">图片加载中</span>
      <img ref="imgDom" v-show="!loading" class="current-img" alt="" />
    </div>
    <div></div>
    <div
      class="ysj-image-arraw-left"
      v-if="dataConfig.current > 1"
      @click="arrawLeft"
    >
      <svg class="iconpark-icon"><use href="#left"></use></svg>
    </div>
    <div
      class="ysj-image-arraw-right"
      v-if="dataConfig.current < dataConfig.urls.length"
      @click="arrawRight"
    >
      <svg class="iconpark-icon"><use href="#right"></use></svg>
    </div>
  </div>
</template>
<script lang="ts">
import { ImgPreviewConfigType } from "../types/index";
// config = { urls: [], current: 1, loop: false, header: vdom, success, fail }
// loop 是否可循环预览
// 右上角默认 关闭，下载，放大/缩小，自定义
import { defineComponent, PropType, ref, reactive } from "vue";
import { loadIcon } from "./icon";
export default defineComponent({
  name: "img-preview",
  props: {
    config: {
      type: Object as PropType<ImgPreviewConfigType>,
      default() {
        return {};
      },
    },
  },
  setup() {
    const imgDom = ref();
    const dataConfig = ref<ImgPreviewConfigType>({
      current: 0,
      urls: [],
    });
    const zoomRate = ref(1);
    const loading = ref(false);
    const imgInfo = reactive({
      w: 0,
      h: 0,
    });
    return {
      imgDom,
      dataConfig,
      loading,
      zoomRate,
      imgInfo,
      loadIcon,
    };
  },
  methods: {
    loadImage() {
      const windowWidth = window.innerWidth;
      const windowheight = window.innerHeight;
      const rate = windowWidth / windowheight;
      this.$nextTick(() => {
        this.loading = true;
        const img = this.$refs.imgDom as HTMLImageElement;
        img.removeAttribute("width");
        img.removeAttribute("height");
        if (this.dataConfig) {
          img.src = this.dataConfig.urls[this.dataConfig.current - 1];
        }
        img.onload = () => {
          const imgRate = img.width / img.height;
          this.imgInfo.w = img.width;
          this.imgInfo.h = img.height;
          console.log("4323", imgRate, rate);
          if (imgRate > rate) {
            if (img.width > windowWidth * 0.7) {
              img.style.width = windowWidth * 0.7 + "px";
              img.style.height =
                img.height / (img.width / (windowWidth * 0.7)) + "px";
              this.imgInfo.w = windowWidth * 0.7;
              this.imgInfo.h = img.height / (img.width / (windowWidth * 0.7));
            }
          } else {
            if (img.height > windowheight * 0.7) {
              img.style.height = windowheight * 0.7 + "px";
              img.style.width =
                img.width / (img.height / (windowheight * 0.7)) + "px";
              this.imgInfo.w = img.width / (img.height / (windowheight * 0.7));
              this.imgInfo.h = windowheight * 0.7;
            }
          }
          this.loading = false;
        };
      });
    },
    arrawRight() {
      if (
        this.dataConfig.current == this.dataConfig.urls.length &&
        !this.dataConfig.loop
      ) {
        return;
      }
      if (
        this.dataConfig.current === this.dataConfig.urls.length &&
        this.dataConfig.loop
      ) {
        this.dataConfig.current = 1;
      } else {
        this.dataConfig.current += 1;
      }
      this.loadImage();
    },
    arrawLeft() {
      if (this.dataConfig.current == 1 && !this.dataConfig.loop) {
        return;
      }
      if (this.dataConfig.loop && this.dataConfig.current == 1) {
        this.dataConfig.current = this.dataConfig.urls.length;
      } else {
        this.dataConfig.current -= 1;
      }
      this.loadImage();
    },
    getFull() {
      if (this.isFull()) {
        const full = document.exitFullscreen;
        if (full) {
          full.call(document);
        } else if (window.ActiveXObject) {
          const ws = new window.ActiveXObject("WScript.Shell");
          ws && ws.SendKeys("F11");
        }
      }
      const element = document.documentElement as any;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        // 兼容火狐
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // 兼容谷歌
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // 兼容IE
        element.msRequestFullscreen();
      }
    },
    isFull() {
      return document.fullscreenElement || false;
    },
    close() {
      console.log("434");
      const dom = document.getElementsByClassName("ysj-imgage-wrapper");
      (dom[0] as HTMLDivElement).style.display = "none";
    },
    zoom(type: string) {
      // this.checkZoom();
      console.log("his.imgInfo", this.imgInfo);
      if (type === "big") {
        this.zoomRate = Number((this.zoomRate + 0.2).toFixed(1));
      } else {
        console.log("this.zoomRate", this.zoomRate);
        if (this.zoomRate <= 0.2) {
          return;
        } else {
          this.zoomRate = Number((this.zoomRate - 0.2).toFixed(1));
        }
      }
      console.log("type", type, this.zoomRate);
      const img = this.$refs.imgDom as HTMLImageElement;
      const width = this.imgInfo.w * this.zoomRate;
      const height = this.imgInfo.h * this.zoomRate;
      img.style.width = width + "px";
      img.style.height = height + "px";
    },
  },
  mounted() {
    this.loadIcon();
    if (this.config) {
      this.dataConfig = Object.assign({}, this.config);
      this.loadImage();
    }
  },
});
</script>
<style lang="css" scoped>
.iconpark-icon {
  width: 24px;
  height: 24px;
  color: #fff;
}
.ysj-image-container {
  background-color: #000;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  color: #fff;
}
.ysj-image-container-header {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  width: 100%;
  line-height: 44px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 99;
}
.ysj-image-opt {
  display: flex;
  align-content: center;
}
.ysj-image-opt button,
.ysj-image-opt a {
  cursor: pointer;
  display: inline-block;
  height: 44px;
  line-height: 44px;
  width: 24px;
  margin: 0 10px;
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border-width: 0;
}

.ysj-image-opt button:focus,
.ysj-image-opt a:focus {
  outline-width: 0;
}
.ysj-image-arraw-left {
  position: absolute;
  left: 10px;
  top: 50%;
  cursor: pointer;
  width: 30px;
}
.ysj-image-arraw-right {
  position: absolute;
  right: 10px;
  top: 50%;
  cursor: pointer;
  width: 30px;
}
.current-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  user-select: none;
}
.loading-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #999;
}
</style>
