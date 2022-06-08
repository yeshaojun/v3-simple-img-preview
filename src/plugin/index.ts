import { App, createApp, h } from "vue";
import ImgContainer from "./container.vue";
import { ImgPreviewConfigType } from "../types/index";

const createDom = (config: ImgPreviewConfigType): void => {
  let div!: HTMLElement | null;
  let Ctor!: App<Element>;
  const dom = document.getElementsByClassName("ysj-imgage-wrapper");
  if (Ctor && dom) {
    div = dom[0] as HTMLElement;
    div.style.display = "block";
    Ctor.unmount();
  } else {
    div = document.createElement("DIV");
    div.setAttribute("class", "ysj-imgage-wrapper");
    document.body.appendChild(div);
  }
  Ctor = createApp(h(ImgContainer, {}, config.header), {
    config,
  });
  Ctor.component(
    "imgPreview",
    h(ImgContainer, { config: config }, config.header)
  );
  Ctor.mount(div);
};

export const previewImage = (config: ImgPreviewConfigType): void => {
  createDom(config);
};

export const previewImageCom = ImgContainer;

export default {
  install: (app: App<Element>): void => {
    app.config.globalProperties.$previewImage = previewImage;
    // 这种方式可以，但是能不能直接覆盖呢？
    app.config.globalProperties.$previewImageCom = ImgContainer;
  },
};
