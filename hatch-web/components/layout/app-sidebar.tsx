'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { ChevronDown, Home, Plus, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Popular',
    url: '/popular',
    icon: TrendingUp
  },
  {
    title: 'All Communities',
    url: '/communities',
    icon: Users
  }
];

const communities = [
  {
    title: 'r/KoreaLife',
    url: '/c/korea',
    members: '15.2k',
    color: 'bg-blue-500'
  },
  {
    title: 'r/VisaKorea',
    url: '/c/visa',
    members: '8.5k',
    color: 'bg-green-500'
  },
  {
    title: 'r/HousingKorea',
    url: '/c/housing',
    members: '12.1k',
    color: 'bg-purple-500'
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="relative border-r" collapsible="icon">
      <SidebarTrigger
        className="absolute top-7 -right-5 z-10 h-10 w-10 rounded-full border bg-white text-black [&>svg]:size-5!"
        variant={'default'}
      />

      <SidebarContent className="px-2">
        {/* Main Navigation */}
        <SidebarGroup className="py-2 group-data-[collapsible=icon]:hidden">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10 px-3">
                    <Link href={item.url} className="group">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />

        {/* Communities Section */}
        <SidebarGroup className="py-2 group-data-[collapsible=icon]:hidden">
          <div className="mb-1 flex items-center justify-between px-3 group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Communities
            </SidebarGroupLabel>
            <button className="text-muted-foreground hover:bg-sidebar-accent hover:text-foreground rounded p-1 transition-colors">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {communities.map((community) => (
                <SidebarMenuItem key={community.title}>
                  <SidebarMenuButton asChild className="h-9 px-3">
                    <Link href={community.url} className="group">
                      <div
                        className={`h-4 w-4 rounded-full ${community.color}`}
                      />
                      <div className="flex flex-1 items-center justify-between group-data-[collapsible=icon]:hidden">
                        <span className="text-sm">{community.title}</span>
                        <span className="text-muted-foreground text-xs">
                          {community.members}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground h-9 px-3">
                  <Plus className="h-4 w-4" />
                  <span className="text-sm group-data-[collapsible=icon]:hidden">
                    Create Community
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />

        {/* Resources Section */}
        <SidebarGroup className="py-2 group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="text-muted-foreground px-3 text-xs font-semibold tracking-wide uppercase">
            Resources
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="sm" className="h-8 px-3">
                  <Link href="/about">
                    <span className="text-sm group-data-[collapsible=icon]:hidden">
                      About
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="sm" className="h-8 px-3">
                  <Link href="/help">
                    <span className="text-sm group-data-[collapsible=icon]:hidden">
                      Help
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-4 py-3 group-data-[collapsible=icon]:hidden">
        <div className="text-muted-foreground flex items-center gap-2 text-xs">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
        <div className="text-muted-foreground mt-1 text-xs">
          Hatch Inc © 2025
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
