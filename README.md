# Happy Journey

一个记录人生方向的纯静态网站。首页展示 12 条赛道；目前只有计算机、金融和音乐可以进入各自的空白页，其余入口不可点击。

## 本地开发

需要 Node.js 22.12+。

```bash
npm ci
npm run dev
```

`npm run build` 会检查 TypeScript、打包样式，并把 React 组件预渲染为 HTML。当前页面无需客户端 JavaScript；产物在 `dist/`。`npm run preview` 可在本地检查构建结果。

## 更新入口

在 `src/content.ts` 的 `tracks` 中维护名称、描述和链接。名称、描述来自本地 `anjing-anjing/src/config/modules.ts`。只有设置 `href` 的卡片可点击。三个空白页由 `scripts/prerender.mjs` 生成。

## 内容整理 Skill

[安静の四次元ポケット](.agents/skills/anjing-pocket/SKILL.md) 用于收下文字、图片、链接和音视频材料，保留原件与来源，按相关人生赛道逐步整理与打磨。可以用 `$anjing-pocket` 调用；仅讨论方案时不保存内容。

各赛道的展示与整理习惯仍在逐个打磨。当前的明确收集请求默认写入本地 `.pocket/`，该目录不进入 Git 或网站构建；网站发布按实际请求处理。手机接收入口和持续自动化尚未实现。

## 样式来源

配色和自定义鼠标素材参考 [anjing-le/anjing](https://github.com/anjing-le/anjing)；网格、悬停过渡和文案参考本地 `anjing-anjing` 的 TracksGrid。12 张插图以 Anjing 角色原图为参照生成并压缩为 WebP。

## 发布

默认构建使用根路径，供 Cloudflare Pages 和 `happy-journey.anjing.cc` 使用。Cloudflare Pages 的构建命令为 `npm run build`，输出目录为 `dist`。推送 `main` 时，GitHub Actions 使用仓库密钥 `CF_PAGES_DEPLOY_HOOK` 触发 Cloudflare 从 GitHub 当前提交构建。

现有 GitHub Pages 工作流会设置 `BASE_PATH=/happy-journey/`，推送到 `main` 后发布至 `/happy-journey/`。
