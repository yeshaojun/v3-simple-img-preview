# v3-simple-img-preview

# 一个简单的图片预览插件

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
