import { MainLayout } from '@/components/layout/main-layout';
import { PostFeed } from '@/components/layout/PostFeed';

export default function Home() {
  return (
    <MainLayout>
      <PostFeed />
    </MainLayout>
  );
}
