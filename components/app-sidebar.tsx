import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "홈",
    url: "/",
    icon: Home,
  },
  {
    title: "예산관리",
    url: "/budget",
    icon: Inbox,
  },
  {
    title: "캘린더",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "설정",
    url: "/setting",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-white py-4">
        <SidebarMenuButton size='lg' className="hover:bg-transparent">
          <Image src='/logo.webp' width={48} height={48} alt='finden' className="rounded-md" />
          <span className="text-lg font-extrabold text-sidebar-foreground">FinDen</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
