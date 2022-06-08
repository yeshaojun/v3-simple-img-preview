import { App, VNode } from "vue";
export interface ImgPreviewConfigType {
  urls: string[];
  current: number;
  loop?: boolean;
  header?: VNode;
  success?: (status: string) => void;
  fail?: (status: string) => void;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $previewImage: (options: ImgPreviewConfigType) => App;
  }
}
