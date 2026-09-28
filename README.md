# Happy Journey

一个记录知识、经历与未来更多人生方向的纯静态网站。当前版本只有入口和空状态，不包含虚构的个人记录，也没有登录、数据库或服务端。

## 本地开发

需要 Node.js 22.12+。

```bash
npm ci
npm run dev
```

`npm run build` 会检查 TypeScript、打包资源，并把 React 首页预渲染为 HTML。产物在 `dist/`。`npm run preview` 可在本地检查构建结果。

## 添加方向和记录

在 `src/content.ts` 的 `directions` 中添加方向；在对应方向的 `entries` 中添加真实记录的标题、摘要、日期和链接。网站不会显示尚未填写的个人经历。新增独立页面时把静态页面放入 `public/`，并使用以 `/happy-journey/` 开头的链接，或扩展预渲染流程。

## 样式来源

配色、自定义鼠标素材、卡片上浮和边框过渡参考 [anjing-le/anjing](https://github.com/anjing-le/anjing) 的当前实现。这里保留其轻柔的视觉语言，同时使用自己的页面结构。

## 发布

推送到 `main` 后，GitHub Actions 构建并发布 GitHub Pages。项目路径为 `/happy-journey/`。
