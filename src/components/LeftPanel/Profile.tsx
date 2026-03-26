import { portfolioData } from '../../data/portfolioData'
import {
  UserRound,
  BriefcaseBusiness,
  MessageCircle,
  Phone,
  PenSquare,
  Mail,
} from 'lucide-react'

export default function Profile() {
  const { personalInfo } = portfolioData
  const profileRows = [
    { label: '姓 名', value: `${personalInfo.name} / ${personalInfo.nameEn}`, icon: UserRound },
    { label: '专 业', value: personalInfo.major, icon: BriefcaseBusiness },
    { label: '微 信', value: personalInfo.wechat, icon: MessageCircle },
    { label: '电 话', value: personalInfo.phone, icon: Phone },
    { label: '站酷ID', value: personalInfo.zcoolId, icon: PenSquare },
    { label: '邮 箱', value: personalInfo.email, icon: Mail },
  ]

  return (
    <section className="space-y-6">
      <img
        src={personalInfo.avatarPath}
        alt={personalInfo.name}
        loading="lazy"
        className="h-28 w-28 rounded-3xl object-cover ring-1 ring-white/20 shadow-inner shadow-black/20"
      />

      <div className="space-y-3">
        {profileRows.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="flex items-center gap-3 text-sm md:text-base">
              <Icon className="h-4 w-4 text-gray-300" />
              <span className="min-w-14 text-gray-300">{item.label}：</span>
              <span className="text-gray-100">{item.value}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

