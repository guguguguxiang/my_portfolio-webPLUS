# 个人作品集网站 - 技术设计文档 (Tech Design)

## 1. 技术栈选型 (Tech Stack)
- **核心框架**：React 18 + TypeScript + Vite (提供极致的开发和打包速度)。
- **样式方案**：Tailwind CSS (利用其 Utility-first 特性快速实现深色模式、响应式和玻璃拟物化质感)。
- **核心轮播组件**：**Swiper React** (极其关键：Framer Motion 处理复杂的横向带阻尼滑动和居中透出效果比较繁琐，Swiper 是实现右侧项目卡片滑动的最佳选择)。
- **动画辅助**：Framer Motion (仅用于页面初次加载时，左侧文字的优雅淡入和元素错开动画)。
- **图标库**：Lucide React (提供极简现代的矢量图标，如对勾、箭头、社交媒体图标)。

## 2. 页面布局策略 (Layout Strategy)
放弃传统的垂直长滚动页面结构，采用**全屏应用模式 (100vh)**：
- **Desktop (大屏)**：采用 Flexbox 或 CSS Grid 实现 `35% (左) : 65% (右)` 的严格左右分栏。左侧面板为固定高度 (`fixed` 或 `sticky`)，右侧面板承载背景图与滑动轮播。
- **Mobile (移动端)**：在小于 `768px` (md 断点) 时，转为垂直排布。左侧个人信息变为顶部普通流区块，下方紧接支持横向滑动的项目轮播区。

## 3. 项目与组件结构设计 (Project Structure)
组件树严格按照视觉层级划分，避免大而全的组件。

```text
src/
├── assets/                  # 存放图片素材 (头像、背景图、项目截图)
├── data/
│   └── portfolioData.ts     # (将之前的 JSON 数据转为 TS 导出，自带类型提示)
├── components/
│   ├── Layout/              # 布局级组件
│   │   ├── SplitScreen.tsx  # 左右分栏容器组件
│   │   └── TopNav.tsx       # 顶部极简导航
│   ├── LeftPanel/           # 左侧固定区组件
│   │   ├── Profile.tsx      # 头像与基本信息
│   │   ├── HeroText.tsx     # 主标题与自我介绍
│   │   └── StatsBlock.tsx   # 统计数据模块
│   └── RightPanel/          # 右侧滑动区组件
│   │   ├── Showcase.tsx     # 包含标题和 Swiper 的主容器
│   │   ├── ProjectCard.tsx  # 单个项目卡片 (包含毛玻璃样式)
│   │   └── Background.tsx   # 底层全屏背景图 (带暗色遮罩)
├── App.tsx                  # 根组件，组装 LeftPanel 和 RightPanel
└── main.tsx                 # 入口文件
```

## 4.  数据管理

- 项目数据和技能数据存储在 TypeScript 文件中
- 使用数组存储，方便后续添加和修改