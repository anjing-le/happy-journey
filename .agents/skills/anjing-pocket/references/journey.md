# Happy Journey 项目与赛道上下文

## 找到正确项目

优先使用当前任务指定的仓库或工作目录。若 Skill 位于目标仓库的 `.agents/skills/anjing-pocket`，仓库根目录是它向上三层；通过本机符号链接使用时先解析真实路径。当前常用仓库为 `/Users/lvxianghe/project/anjing/happy-journey`，但不要把此路径当作其他机器的固定要求。

开始时检查工作区、根 README 和适用的 AGENTS.md，保留其他任务的改动。本文只提供定位线索，当前源码和用户要求是依据。

## 已确认的方向

网站是用户个人 IP 的长期收集、打磨与展示空间。12 个赛道并行生长，各赛道可以有自己的页面风格和内容习惯。统一入口、手机使用和常开 Mac 接收整理是希望逐步实现的体验，不代表已经部署。

赛道标识从 `src/content.ts` 读取；目前为：

| 标识 | 赛道 |
| --- | --- |
| computer | 计算机 |
| finance | 金融 |
| music | 音乐 |
| english | 英语 |
| fitness | 健身/形体 |
| style | 形象/穿搭 |
| calligraphy | 书法/写字 |
| brain | 智力训练 |
| photography | 摄影/审美 |
| editing | 剪辑/制作 |
| food | 美食/料理 |
| dance | 跳舞 |

## 网站定位线索

- `README.md`：开发、内容入口与发布约定。
- `src/content.ts`：目前是首页赛道卡片数据，不是正文素材库。
- `src/App.tsx`、`src/style.css`：当前首页结构与样式。
- `scripts/prerender.mjs`：构建后的 HTML 生成；起始状态只生成计算机、金融、音乐三个空白页。
- `npm run build`：TypeScript 检查、Vite 构建与静态预渲染。
- 默认根路径用于 Cloudflare；`BASE_PATH=/happy-journey/` 用于 GitHub Pages。写静态资源链接时遵循项目现有 base 处理。
- `public/`、`dist/` 和公开 Git 仓库不能用作私人材料收集箱。`.pocket/` 应在根 `.gitignore` 中排除，并位于 `public/` 之外。
- 读取实际发布工作流后再发布；不能仅凭本地构建成功就声称域名已更新。

## 旧方式可作为参考

需要对照时再读这些同级仓库，不在每次收集时扫描全部材料：

- `anjing-anjing/src/components/TrackMediaLibrary/`：素材与里程碑的收集、分类及按时间回看；计算机使用它，音乐另有学习与里程碑双时间轴，金融使用数据、对话和自动化入口。
- `happy-llm-journey/README.md` 与相应模块 README：知识、最佳实践、活动；Markdown 是正文来源，`overview.html` 是生成的总览。
- `happy-finance-journey/README.md` 与相应模块 README：同样的三个入口，强调来源、时效、适用条件与判断依据。

这些描述的是以前的组织方式。是否沿用、怎样融合、各赛道怎样排版都还在打磨，不能据此为新站直接采用全部旧分类或填入示例内容。

## 后续赛道规则

目前还没有定稿的赛道排版和整理规则。需要时根据用户认可的真实样例增加针对某个赛道的参考文件，并从 Skill 中明确链接、按需读取。只有改变整理决策的内容才需要写入规则；不要预建 12 份空规范或复制整套网站源码。
