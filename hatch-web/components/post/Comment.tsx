'use client';

import { useState } from 'react';

export interface CommentData {
  id: number;
  username: string;
  postedTime: string;
  content: string;
  votes: number;
  replies?: CommentData[];
}

interface CommentProps {
  comment: CommentData;
  depth?: number;
}

export function Comment({ comment, depth = 0 }: CommentProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const hasReplies = comment.replies && comment.replies.length > 0;
  const indent = depth > 0;

  return (
    <div className={indent ? 'ml-6' : ''}>
      <div className="bg-card border-l-2 border-muted p-3">
        <div className="flex gap-2">
          {/* Left: Vote Section */}
          <div className="flex flex-col items-center gap-0.5">
            <button className="hover:text-primary transition-colors">
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <span className="text-xs font-semibold">{comment.votes}</span>
            <button className="hover:text-destructive transition-colors">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Right: Comment Content */}
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-1.5">
              <div className="bg-primary/10 h-5 w-5 rounded-full" />
              <span className="text-xs font-medium">u/{comment.username}</span>
              <span className="text-muted-foreground text-xs">
                • {comment.postedTime}
              </span>
              {hasReplies && (
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="text-muted-foreground hover:text-foreground text-xs"
                >
                  [{isCollapsed ? '+' : '−'}]
                </button>
              )}
            </div>

            {!isCollapsed && (
              <>
                <p className="text-sm leading-snug">{comment.content}</p>
                <div className="text-muted-foreground mt-1.5 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setShowReplyForm(!showReplyForm)}
                    className="hover:text-foreground"
                  >
                    Reply
                  </button>
                  <button className="hover:text-foreground">Share</button>
                  <button className="hover:text-foreground">Report</button>
                </div>

                {/* Reply Form */}
                {showReplyForm && (
                  <div className="mt-2">
                    <textarea
                      placeholder="Write a reply..."
                      className="border-input bg-background placeholder:text-muted-foreground w-full rounded-sm border p-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      rows={2}
                    />
                    <div className="mt-1 flex gap-2">
                      <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-2 py-1 text-xs font-medium transition-colors">
                        Reply
                      </button>
                      <button
                        onClick={() => setShowReplyForm(false)}
                        className="text-muted-foreground hover:text-foreground rounded-sm px-2 py-1 text-xs transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Nested Replies */}
      {!isCollapsed && hasReplies && (
        <div className="mt-2 space-y-2">
          {comment.replies!.map((reply) => (
            <Comment key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
