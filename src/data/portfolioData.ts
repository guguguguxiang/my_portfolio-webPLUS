import avatarImg from '../../IMG/touxiang.jpg'
import bgImg1 from '../../IMG/background_image1.png'
import bgImg2 from '../../IMG/background_image2.jpg'

import projectImg1 from '../../IMG/xiangmu1.png'
import projectImg2 from '../../IMG/xiangmu2.png'
import projectImg3 from '../../IMG/xiangmu3.png'

export interface PersonalInfo {
  name: string
  nameEn: string
  avatarPath: string
  age: string
  basedIn: string
  role: string
  heroTitle: string
  heroBioEn: string
  heroBioCn: string
}

export interface StatItem {
  value: string
  label: string
}

export interface Project {
  id: number
  nameCn: string
  nameEn: string
  description: string
  screenshotPath: string
  techStack: string[]
  date: string
  status: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  stats: StatItem[]
  backgrounds: string[]
  projects: Project[]
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: '宋方胜',
    nameEn: 'VictorFang',
    avatarPath: avatarImg,
    age: '18',
    basedIn: 'zzu',
    role: 'Creative Web Developer',
    heroTitle: 'Crafting Digital Experiences',
    heroBioEn:
      '专注于创建优雅且实用的数字产品，追求代码的艺术性与工程性的完美平衡。',
    heroBioCn: '用代码编织艺术，用工程铸就完美。',
  },
  stats: [
    { value: '03', label: 'PROJECTS' },
    { value: '4+', label: 'YEARS EXP.' },
    { value: '08+', label: 'SKILLS' },
  ],
  backgrounds: [bgImg1, bgImg2],
  projects: [
    {
      id: 1,
      nameCn: '待办事项清单（进阶版）',
      nameEn: 'To-Do List (Advanced)',
      description: '支持分类、优先级、搜索与统计的智能待办工具',
      screenshotPath: projectImg1,
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'Zustand',
        'Tailwind CSS',
        'date-fns',
      ],
      date: '2026-01',
      status: 'Done',
    },
    {
      id: 2,
      nameCn: '番茄钟计时器',
      nameEn: 'Pomodoro Timer',
      description: '支持自定义时长、通知提醒的专注力工具',
      screenshotPath: projectImg2,
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Notification API',
        'LocalStorage',
      ],
      date: '2026-02',
      status: 'Done',
    },
    {
      id: 3,
      nameCn: '天气查询应用',
      nameEn: 'Weather App',
      description: '支持城市搜索、定位、收藏的天气查询工具',
      screenshotPath: projectImg3,
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'OpenWeatherMap API',
        'LocalStorage',
      ],
      date: '2026-03',
      status: 'Done',
    },
  ],
}

