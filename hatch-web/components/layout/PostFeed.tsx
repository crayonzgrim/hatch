import Link from 'next/link';
import { posts } from '@/mock/posts';

export function PostFeed() {

  return (
    <div className="space-y-2">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-card flex gap-0 border transition-colors hover:bg-muted/5"
        >
          {/* Left: Vote Section */}
          <div className="bg-muted/50 flex w-10 flex-col items-center gap-1 py-2">
            <button className="hover:text-primary transition-colors">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <span className="text-xs font-semibold">{post.votes}</span>
            <button className="hover:text-destructive transition-colors">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Right: Content Section */}
          <div className="flex-1 p-3">
            {/* Header: Meta Information */}
            <div className="mb-1.5 flex items-center gap-1.5">
              <div className="bg-primary/10 h-5 w-5 rounded-full" />
              <div className="text-muted-foreground flex items-center gap-1 text-xs">
                <span className="font-medium">{post.communityName}</span>
                <span>•</span>
                <span>Posted by u/{post.username}</span>
                <span>•</span>
                <span>{post.postedTime}</span>
              </div>
            </div>

            {/* Body: Title & Content */}
            <Link href={`/post/${post.id}`} className="mb-2 block">
              <h2 className="mb-1.5 text-base font-semibold leading-tight hover:underline">
                {post.title}
              </h2>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {post.content}
              </p>
            </Link>

            {/* Footer: Action Bar */}
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <button className="hover:bg-muted flex items-center gap-1 rounded px-2 py-1 transition-colors">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>{post.commentsCount} Comments</span>
              </button>
              <button className="hover:bg-muted flex items-center gap-1 rounded px-2 py-1 transition-colors">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>Share</span>
              </button>
              <button className="hover:bg-muted flex items-center gap-1 rounded px-2 py-1 transition-colors">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span>Save</span>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
