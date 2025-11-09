import { MainLayout } from '@/components/layout/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-4">
        {/* Post Feed */}
        {[1, 2, 3, 4, 5].map((i) => (
          <article
            key={i}
            className="bg-card text-card-foreground rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="bg-primary/10 h-8 w-8 rounded-full" />
              <div className="flex-1">
                <div className="text-sm font-medium">Community Name</div>
                <div className="text-muted-foreground text-xs">
                  Posted by u/username • 2 hours ago
                </div>
              </div>
            </div>
            <h2 className="mb-2 text-lg font-semibold">
              Sample Post Title {i}
            </h2>
            <p className="text-muted-foreground mb-3 text-sm">
              This is a sample post content. In a real application, this would
              contain the actual post content from users sharing their
              experiences living in Korea.
            </p>
            <div className="text-muted-foreground flex items-center gap-4 text-sm">
              <button className="hover:text-foreground flex items-center gap-1">
                <span>👍</span>
                <span>{i * 123}</span>
              </button>
              <button className="hover:text-foreground flex items-center gap-1">
                <span>💬</span>
                <span>{i * 45} Comments</span>
              </button>
              <button className="hover:text-foreground flex items-center gap-1">
                <span>Share</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </MainLayout>
  );
}
