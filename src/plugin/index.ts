import { App, createApp, h, Plugin } from "vue";
import ImgContainer from "./container.vue";
import { ImgPreviewConfigType } from "../types/index";
let Ctor!: App<Element>;
const createDom = (config: ImgPreviewConfigType): void => {
  let div!: HTMLElement | null;
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
  install: (app: App): any => {
    app.config.globalProperties.$previewImage = previewImage;
    // 这种方式可以，但是能不能直接覆盖呢？
    app.config.globalProperties.$previewImageCom = ImgContainer;
  },
} as any;
// export default /*#__PURE__*/ ((): InstallableComponent => {
//   // Assign InstallableComponent type
//   const installable = ImgContainer as unknown as InstallableComponent;
//   // Attach install function executed by Vue.use()
//   installable.install = (app: App): any => {
//     app.config.globalProperties.$previewImageCom = previewImage;
//   };
//   return installable;
// })();
