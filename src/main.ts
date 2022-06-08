import { createApp } from "vue";
import App from "./App.vue";
import ImgPreview from "./plugin/index";

createApp(App).use(ImgPreview).mount("#app");
