<template>
  <div class="ysj-image-container">
    <div class="ysj-image-container-header">
      <slot></slot>
      <div v-if="!config.header">
        {{ dataConfig.current + "/" + dataConfig.urls.length }}
      </div>
      <div
        class="ysj-image-opt"
        v-if="!config.header && browserRedirect === 'Desktop'"
      >
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
    <div
      class="ysj-image-container-content"
      v-if="browserRedirect === 'Desktop'"
    >
      <span v-show="loading" class="loading-wrapper">图片加载中</span>
      <span v-show="error" class="loading-wrapper">图片加载失败</span>
      <img ref="imgDom" v-show="!loading" class="current-img" alt="" />
    </div>
    <div v-else class="ysj-image-container-content">
      <swipe
        class="ysj-my-swipe"
        :active="dataConfig.current - 1"
        @change="changeSwipe"
      >
        <swipe-item
          v-for="(item, index) in config.urls"
          :key="item"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
        >
          <img
            :src="item"
            :style="index === dataConfig.current - 1 ? imgStyle : null"
            alt=""
            style="width: 100%"
          />
        </swipe-item>
      </swipe>
    </div>
    <div
      class="ysj-image-arraw-left"
      v-if="dataConfig.current > 1 && browserRedirect === 'Desktop'"
      @click="arrawLeft"
    >
      <svg class="iconpark-icon"><use href="#left"></use></svg>
    </div>
    <div
      class="ysj-image-arraw-right"
      v-if="
        dataConfig.current < dataConfig.urls.length &&
        browserRedirect === 'Desktop'
      "
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
import { defineComponent, PropType, ref, reactive, CSSProperties } from "vue";
import { loadIcon } from "./icon";
import swipe from "@/components/swipe/index.vue";
import swipeItem from "@/components/swipeItem/index.vue";
import { preventDefault } from "./utils";
import { useTouch } from "../utils/index";
const touch = useTouch();
let touchStartTime: number;
let startScale: number;
let startDistance: number;
let startMoveX: number;
let startMoveY: number;
let doubleTapTimer: any;
export default defineComponent({
  name: "img-preview",
  components: {
    swipe,
    swipeItem,
  },
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
    const loading = ref(false);
    const error = ref(false);
    const imgInfo = reactive({
      w: 0,
      h: 0,
    });
    const state = reactive({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0,
    });
    return {
      imgDom,
      dataConfig,
      loading,
      imgInfo,
      loadIcon,
      error,
      state,
    };
  },
  computed: {
    browserRedirect() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    },
    imgStyle() {
      const { scale, moveX, moveY, moving, zooming } = this.state;
      const style: CSSProperties = {
        transitionDuration: zooming || moving ? "0s" : ".3s",
      };
      if (scale !== 1) {
        const offsetX = moveX / scale;
        const offsetY = moveY / scale;
        style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
      }

      return style;
    },
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
        this.error = false;
        img.onload = () => {
          this.config.success && this.config.success("success");
          const imgRate = img.width / img.height;
          this.imgInfo.w = img.width;
          this.imgInfo.h = img.height;
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
        img.onerror = (e) => {
          this.loading = false;
          this.error = true;
          this.config.fail && this.config.fail("fail");
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
    touchstart(e: TouchEvent) {
      if (this.browserRedirect === "Desktop") {
        return;
      }
      const { touches } = e;

      touch.start(e);
      // this.startX = touches[0].clientX;
      // this.startY =touches[0].clientY;
      this.state.moving = touches.length === 1 && this.state.scale !== 1;
      this.state.zooming = touches.length === 2;
      startMoveX = this.state.moveX;
      startMoveY = this.state.moveY;
      touchStartTime = Date.now();
      if (this.state.zooming) {
        startScale = this.state.scale;
        startDistance = this.getDistance(e.touches);
      }
    },
    touchmove(e: TouchEvent) {
      const { touches } = e;
      touch.move(e);
      if (this.state.moving || this.state.zooming) {
        preventDefault(e, true);
      }
      if (this.state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        const maxMoveX = Number(window.outerWidth);
        const maxMoveY = Number(window.outerHeight);
        this.state.moveX = this.clamp(moveX, -maxMoveX, maxMoveX);
        this.state.moveY = this.clamp(moveY, -maxMoveY, maxMoveY);
      }

      if (this.state.zooming && touches.length === 2) {
        const distance = this.getDistance(touches);
        const scale = (startScale * distance) / startDistance;
        if (scale < 1) {
          // this.state.scale = 1;
          this.state.scale = scale;
        } else if (scale > 3) {
          this.state.scale = 3;
        } else {
          this.state.scale = scale;
        }
      }
    },
    touchend(e: TouchEvent) {
      let stopPropagation = false;
      if (this.state.moving || this.state.zooming) {
        stopPropagation = true;

        if (
          this.state.moving &&
          startMoveX === this.state.moveX &&
          startMoveY === this.state.moveY
        ) {
          stopPropagation = false;
        }

        if (!e.touches.length) {
          if (this.state.zooming) {
            const maxMoveX = Number(window.outerWidth);
            const maxMoveY = Number(window.outerHeight);
            this.state.moveX = this.clamp(
              this.state.moveX,
              -maxMoveX,
              maxMoveX
            );
            this.state.moveY = this.clamp(
              this.state.moveY,
              -maxMoveY,
              maxMoveY
            );
            this.state.zooming = false;
          }
          this.state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (this.state.scale < 1) {
            this.resetScale();
          }
        }
      } else {
        this.checkTap();
      }
      preventDefault(e, stopPropagation);
      touch.reset();
    },
    getDistance(touches: TouchList) {
      return Math.sqrt(
        (touches[0].clientX - touches[1].clientX) ** 2 +
          (touches[0].clientY - touches[1].clientY) ** 2
      );
    },
    changeSwipe(index: number) {
      this.dataConfig.current = index + 1;
      this.resetScale();
    },
    clamp(num: number, min: number, max: number): number {
      return Math.min(Math.max(num, min), max);
    },
    resetScale() {
      this.state.scale = 1;
      this.state.moveX = 0;
      this.state.moveY = 0;
    },
    checkTap() {
      const { offsetX, offsetY } = touch;
      const deltaTime = Date.now() - touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;
      if (
        offsetX.value < TAP_OFFSET &&
        offsetY.value < TAP_OFFSET &&
        deltaTime < TAP_TIME
      ) {
        if (doubleTapTimer) {
          clearTimeout(doubleTapTimer);
          doubleTapTimer = null;
          // toggleScale();
        } else {
          doubleTapTimer = setTimeout(() => {
            this.close();
            doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    }
  },
  mounted() {
    this.loadIcon();
    if (this.config) {
      this.dataConfig = Object.assign({}, this.config);
      if (this.browserRedirect === "Desktop") {
        this.loadImage();
      }
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
  z-index: 1;
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

.ysj-my-swipe {
  /* position: absolute;
  top: 50%;
  transform: translateY(-50%); */
  height: calc(100vh - 50px);
}
.ysj-my-swipe .ysj-swipe-item {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
