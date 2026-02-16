
import { Stack } from '@mui/material';
import PostCard from './PostCard';
import { posts } from '@/data/posts';

export default function FeedList() {
    return (
        <Stack spacing={0}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </Stack>
    );
}
