'use client';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useSidebarState } from '@/components/providers/sidebar-state-provider';

import { AppSidebar } from './app-sidebar';
import { Header } from './header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { defaultOpen } = useSidebarState();

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex min-h-screen w-full flex-col">
        {/* Header - Full width at the top */}
        <Header />

        {/* Sidebar and Content area below header */}
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset className="container:px-8 flex-1">
            <div className="container mx-auto max-w-screen-2xl">
              <div className="flex gap-4 py-6">
                {/* Main Content */}
                <main className="min-w-0 flex-1">{children}</main>

                {/* Right Sidebar (Optional) */}
                <aside className="hidden w-80 xl:block">
                  <div className="sticky top-20 space-y-4">
                    {/* Popular Communities Widget */}
                    <div className="bg-card text-card-foreground rounded-lg border p-4 shadow-sm">
                      <h3 className="mb-3 text-sm font-semibold">
                        Popular Communities
                      </h3>
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold">
                              {i}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="truncate text-sm font-medium">
                                Community {i}
                              </div>
                              <div className="text-muted-foreground text-xs">
                                {(i * 1234).toLocaleString()} members
                              </div>
                            </div>
                            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-3 py-1 text-xs font-medium">
                              Join
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* About Widget */}
                    <div className="bg-card text-card-foreground rounded-lg border p-4 shadow-sm">
                      <h3 className="mb-2 text-sm font-semibold">
                        About Hatch
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        A community platform for foreigners living in Korea.
                        Share experiences, get advice, and connect with others.
                      </p>
                      <button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-3 w-full rounded-md px-4 py-2 text-sm font-medium">
                        Create Post
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
