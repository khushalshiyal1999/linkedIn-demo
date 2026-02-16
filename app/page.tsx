
import MainLayout from '@/components/layout/MainLayout';
import FeedList from '@/components/feed/FeedList';
import CreatePost from '@/components/feed/CreatePost';
import { Stack, Divider } from '@mui/material';

export default function Home() {
  return (
    <MainLayout>
      <Stack spacing={0}>
        <CreatePost />
        <Divider sx={{ mb: 2, display: { xs: 'block', sm: 'none' } }} />
        <FeedList />
      </Stack>
    </MainLayout>
  );
}
