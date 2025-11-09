import { Comment, CommentData } from './Comment';

interface CommentListProps {
  comments: CommentData[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
