import Link from 'next/link';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  return (
    <aside className={`w-64 space-y-4 ${className}`}>
      {/* Navigation Menu */}
      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <nav className="space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <Link
            href="/popular"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span>📈</span>
            <span>Popular</span>
          </Link>
          <Link
            href="/communities"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span>👥</span>
            <span>Communities</span>
          </Link>
        </nav>
      </div>

      {/* Communities Section */}
      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Your Communities</h3>
          <button className="text-xs text-muted-foreground hover:text-foreground">
            Create
          </button>
        </div>
        <div className="space-y-2">
          <Link
            href="/c/korea"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            <div className="h-6 w-6 rounded-full bg-primary/10" />
            <span>Korea Life</span>
          </Link>
          <Link
            href="/c/visa"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            <div className="h-6 w-6 rounded-full bg-primary/10" />
            <span>Visa & Immigration</span>
          </Link>
          <Link
            href="/c/housing"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent"
          >
            <div className="h-6 w-6 rounded-full bg-primary/10" />
            <span>Housing</span>
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <div className="space-y-2 text-xs text-muted-foreground">
          <Link href="/about" className="block hover:underline">
            About
          </Link>
          <Link href="/help" className="block hover:underline">
            Help
          </Link>
          <Link href="/privacy" className="block hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="block hover:underline">
            Terms
          </Link>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          Hatch © 2025
        </div>
      </div>
    </aside>
  );
}
