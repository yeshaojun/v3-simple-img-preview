# v3-simple-img-preview

### 项目由来

vue3 发布之后，开始使用 vue3 + ts 写代码，需要使用图片预览插件，在 npm 找了一圈没有适合的。要么是 v2 的插件，要么是不支持 ts,要么是使用不方便，因此封装一个简单的图片预览插件。

封装之初，想到了 uni-app 的全局预览图片方法，故仿照 uni-app 的使用方法

## Project setup

```
npm install v3-simple-img-preview --save
yarn add v3-simple-img-preview
```

### 使用方式

在 main.js 中引入

```
import { createApp } from 'vue'
import v3SimpleImgPreview from 'v3-simple-img-preview'
const app = createApp(App)
app.use(v3SimpleImgPreview)
```

在组建中使用

```
this.$previewImage({
    urls: [],
    current: 1,
    loop: false,
    header: vdom,
    success: fn,
    fail: fn
})
```

也可以通过引入方式使用

```
import { previewImage } from 'v3-simple-img-preview'
previewImage({
    urls: [],
    current: 1,
    loop: false,
    header: vdom,
    success: fn,
    fail: fn
})
```

| 参数    | 类型     | 说明                         |
| ------- | -------- | ---------------------------- |
| urls    | string[] | 图片地址                     |
| current | number   | 当前图片                     |
| loop    | boolean  | 是否循环预览                 |
| maxZoom | number   | 图片放大的最大倍数（默认 3） |
| header  | vdom     | 自定义工具栏组建             |
| success | function | 图片加载成功回调             |
| fail    | function | 图片加载失败回调             |

# 自定义工具栏

this.$previewImage方法的header参数可接受一个vdom,同时通过this.$previewImageCom 操作组建

```
      this.$previewImage({
        current: 1,
        urls: [
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F28%2F20191228105602_4Wm5z.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657337420&t=96b6d4de8b85820e609efed7075de6d3",
        ],
        header: h("div", { style: "position: absolute; right: 20px" }, [
          h(
            "button",
            {
              style: "margin-right: 20px",
              onclick: () => {
                this.$previewImageCom.methods.close();
              },
            },
            "关闭"
          ),
          h(
            "button",
            {
              onclick: () => {
                this.$previewImageCom.methods.getFull();
              },
            },
            "全屏"
          ),
        ]),
      });

```

----------------------------\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\*** 华丽的分割线

### 移动端兼容

本来只是一个简单的 pc 端图片预览插件，但是考虑到有些小伙伴可能需要兼容移动端，故特意做了兼容

实现方式参考了 vant 部分源码，纯手写并未使用任何三方插件，可放心使用。

如果问题，或有新的你希望兼容的，都可在 github 上反馈留言，看到之后会及时回复。

♥️♥️♥️

----------------------------\***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\*** 华丽的分割线

6 月 27 日修改

pc 端支持鼠标滚动来放大缩小，当图片大小超过窗口时，不再显示滚动条，改为鼠标拖拽移动

8 月 1 日修改

兼容长图，以及 maxZoom 配置
