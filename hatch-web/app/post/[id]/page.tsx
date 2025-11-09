import { MainLayout } from '@/components/layout/main-layout';
import Link from 'next/link';
import { CommentList } from '@/components/post/CommentList';
import { posts } from '@/mock/posts';
import { mockComments } from '@/mock/comments';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <MainLayout>
        <div className="text-center">Post not found</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-card border">
        {/* Header */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:bg-muted rounded-full p-1">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
            <div className="bg-primary/10 h-8 w-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                {post.communityName}
              </span>
              <span className="text-muted-foreground text-xs">
                {post.username} • {post.postedTime}
              </span>
            </div>
          </div>
          <button className="hover:bg-muted rounded-full p-1">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        {/* Spoiler Tag */}
        {post.isSpoiler && (
          <div className="border-t px-3 py-2">
            <div className="flex items-center gap-1">
              <svg
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xs font-medium">스포일러</span>
            </div>
          </div>
        )}

        {/* Post Content */}
        <div className="p-3">
          {/* Title */}
          <h1 className="mb-2 text-lg font-bold leading-tight">
            {post.title}
          </h1>

          {/* Flair */}
          {post.flair && (
            <span className="bg-green-500/20 text-green-700 dark:text-green-400 mb-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium">
              {post.flair}
            </span>
          )}

          {/* Spoiler Images */}
          {post.isSpoiler && (
            <div className="my-3 space-y-2">
              {/* Large Spoiler Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-red-100">
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xl">
                  <button className="bg-black/80 hover:bg-black/90 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors">
                    View spoiler
                  </button>
                </div>
              </div>

              {/* Small Spoiler Image */}
              <div className="relative h-32 overflow-hidden rounded-lg bg-red-100">
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xl">
                  <button className="bg-black/80 hover:bg-black/90 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors">
                    View spoiler
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <p className="text-sm leading-snug">{post.content}</p>
        </div>

        {/* Action Bar */}
        <div className="border-t px-3 py-2">
          <div className="text-muted-foreground flex items-center gap-3 text-xs">
            <button className="hover:bg-muted flex items-center gap-1.5 rounded-full px-2 py-1">
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
              <span className="font-semibold">{post.votes}</span>
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
            <button className="hover:bg-muted flex items-center gap-1.5 rounded-full px-2 py-1">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="font-semibold">{post.commentsCount}</span>
            </button>
            <button className="hover:bg-muted rounded-full p-1.5">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="hover:bg-muted flex items-center gap-1.5 rounded-full px-2 py-1">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>공유</span>
            </button>
          </div>
        </div>

        {/* Comment Input */}
        <div className="border-t p-3">
          <input
            type="text"
            placeholder="답글을 달아 보세요"
            className="border-input bg-background placeholder:text-muted-foreground w-full rounded-full border px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Sort and Search */}
        <div className="border-t px-3 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs">
              <span className="text-muted-foreground">정렬 기준:</span>
              <button className="hover:bg-muted flex items-center gap-1 rounded px-2 py-1 font-medium">
                <span>좋아요 많은 순</span>
                <svg
                  className="h-3 w-3"
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
            <div className="flex flex-1 items-center gap-2">
              <svg
                className="text-muted-foreground h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="댓글 검색"
                className="placeholder:text-muted-foreground flex-1 bg-transparent text-xs focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="border-t p-3">
          <CommentList comments={mockComments} />
        </div>
      </div>
    </MainLayout>
  );
}
