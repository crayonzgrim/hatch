'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b-border bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="flex h-14 w-full items-center justify-between px-4">
        {/* Mobile Menu Trigger */}
        <SidebarTrigger className="mr-2 [&>svg]:size-5!" />

        {/* Search Bar */}
        <div className="flex w-full flex-1 items-center justify-between space-x-2">
          {/* Logo */}
          <div className="mr-4 flex flex-[0.1]">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold">Hatch</span>
            </Link>
          </div>

          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Hatch"
                className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-9 w-full rounded-full border px-4 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>

          {/* User Actions */}
          <nav className="flex items-center space-x-2">
            <button className="hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none">
              Log In
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-9 items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none">
              Sign Up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
