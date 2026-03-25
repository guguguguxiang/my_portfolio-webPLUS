# Cursor AI Agent 开发准则 (Development Guidelines)

## 1. 核心架构与布局绝对约束 (Layout Constraints)
- **拒绝传统长滚动**：在 Desktop 端，绝对禁止使用垂直长滚动的传统页面布局。
- **强制分栏布局**：必须实现 `100vh` 全屏应用布局。屏幕分为左右两部分：
  - 左侧 (`LeftPanel`)：占据 35%-40% 宽度，高度固定，不可滚动。
  - 右侧 (`RightPanel`)：占据剩余宽度，承载背景图与项目轮播。
- **移动端降级**：当屏幕 `< 768px` 时，转为常规的上下垂直排布，取消左侧的 fixed 状态，右侧轮播区域需占满手机屏幕宽度。

## 2. 数据隔离准则 (Data Isolation)
- **零硬编码**：HTML/JSX 结构中严禁直接写入项目名称、自我介绍、技术标签等具体文案。
- **单一数据源**：所有展示数据必须 100% 从 `src/data/portfolioData.ts` 中引入并遍历渲染。确保 TypeScript 接口 (Interfaces) 定义清晰。

## 3. 视觉与 UI 规范 (Visual UI Rules)
- **极致深色主题**：全局背景使用 `#0a0a0a` 或 Tailwind 的 `bg-slate-950`，主文字颜色为 `#ffffff`，次要文字使用 `text-gray-400`。
- **玻璃拟物化 (Glassmorphism)**：右侧的卡片必须具备高级质感。强制使用 Tailwind 类名组合：`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl`，并在 hover 时增加轻微上浮 (`-translate-y-2`) 和辉光阴影 (`shadow-lg shadow-white/10`)。
- **图片处理**：所有图片必须使用懒加载 (`loading="lazy"`），并使用 `object-cover` 确保图片比例不失真。

## 4. 交互与技术组件约束 (Tech Constraints)
- **框架限制**：严格使用 React 18 + TypeScript + Tailwind CSS。
- **强制使用 Swiper**：右侧项目展示区域必须使用 `Swiper React` 组件，并配置 `slidesPerView="auto"` 或 `1.2`，以实现“完整展示当前卡片，并透出下一个卡片边缘 20%”的画廊效果。
- **动画限制**：仅在页面初次加载时，使用 Framer Motion 为左侧文字和右侧卡片添加入场淡入 (`fade-in-up`) 动画。不要过度使用花哨动画。

## 5. 代码规范 (Code Quality)
- 全部使用 Functional Components + Hooks。
- 组件必须保持单一职责，按照 `TechDesign.md` 拆分文件。
- 关键逻辑（如 Swiper 配置、数据处理）需保留简明扼要的中文注释。