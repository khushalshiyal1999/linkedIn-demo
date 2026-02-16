
"use client";

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    IconButton,
    Button,
    Divider,
    Stack,
    Box,
} from '@mui/material';
import {

    CommentOutlined,
    ShareOutlined,
    SendOutlined,
    MoreHoriz,
    Public,
    Favorite,
    FavoriteBorder,
    InsertPhotoOutlined,
    SentimentSatisfiedAltOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Post } from '@/types/post';
import { currentUser } from '@/data/user';
import { InputBase } from '@mui/material';

interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likesCount);
    const [showCommentInput, setShowCommentInput] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLikesCount(prev => prev - 1);
        } else {
            setLikesCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    return (
        <Card sx={{ borderRadius: 2, mb: 2 }}>
            <CardHeader
                avatar={
                    <Avatar
                        src={post.author.avatar}
                        alt={post.author.name}
                        aria-label={post.author.name}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz />
                    </IconButton>
                }
                title={
                    <Typography variant="subtitle1" fontWeight="bold" component="div">
                        {post.author.name}
                    </Typography>
                }
                subheader={
                    <Stack spacing={0}>
                        <Typography variant="caption" color="text.secondary">
                            {post.author.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Typography variant="caption" color="text.secondary">
                                {post.timestamp}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                •
                            </Typography>
                            <Public sx={{ fontSize: 16, color: 'text.secondary' }} />
                        </Stack>
                    </Stack>
                }
            />
            <CardContent sx={{ pt: 0 }}>
                <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-line' }}>
                    {post.content}
                </Typography>
                {post.imageUrl && (
                    <Box
                        component="img"
                        src={post.imageUrl}
                        alt="Post content"
                        sx={{
                            width: '100%',
                            mt: 2,
                            borderRadius: 1,
                            maxHeight: 500,
                            objectFit: 'cover',
                        }}
                    />
                )}
            </CardContent>

            <Box sx={{ px: 2, pb: 1 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    {(likesCount > 0 || liked) && (
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 16,
                                    height: 16,
                                    bgcolor: 'error.main',
                                    borderRadius: '50%',
                                }}
                            >
                                <Favorite sx={{ width: 10, height: 10, color: 'white' }} />
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                                {likesCount}
                            </Typography>
                        </Stack>
                    )}
                    {(post.commentsCount > 0) && (
                        <Typography variant="caption" color="text.secondary">
                            {post.commentsCount} comments
                        </Typography>
                    )}
                </Stack>
            </Box>

            <Divider />

            <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
                <Button
                    onClick={handleLike}
                    startIcon={liked ? <Favorite color="error" /> : <FavoriteBorder />}
                    color={liked ? "error" : "inherit"}
                    sx={{
                        textTransform: 'none',
                        color: liked ? 'error.main' : 'text.secondary'
                    }}
                >
                    Like
                </Button>
                <Button
                    onClick={() => setShowCommentInput(!showCommentInput)}
                    startIcon={<CommentOutlined />}
                    color="inherit"
                    sx={{
                        textTransform: 'none',
                        color: 'text.secondary',
                        bgcolor: showCommentInput ? 'action.hover' : 'transparent'
                    }}
                >
                    Comment
                </Button>
                <Button
                    startIcon={<ShareOutlined />}
                    color="inherit"
                    sx={{ textTransform: 'none', color: 'text.secondary' }}
                >
                    Share
                </Button>
                <Button
                    startIcon={<SendOutlined />}
                    color="inherit"
                    sx={{ textTransform: 'none', color: 'text.secondary' }}
                >
                    Send
                </Button>
            </CardActions>
            {showCommentInput && (
                <Box sx={{ px: 2, pb: 2, pt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        sx={{ width: 40, height: 40 }}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 50,
                            px: 2,
                            py: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#f3f2ef', // Match screenshot grey background
                        }}
                    >
                        <InputBase
                            placeholder="Add a comment..."
                            fullWidth
                            sx={{ fontSize: 14 }}
                        />
                        <Stack direction="row" spacing={1}>
                            <IconButton size="small">
                                <SentimentSatisfiedAltOutlined sx={{ fontSize: 20, color: 'text.secondary' }} />
                            </IconButton>
                            <IconButton size="small">
                                <InsertPhotoOutlined sx={{ fontSize: 20, color: 'text.secondary' }} />
                            </IconButton>
                        </Stack>
                    </Box>
                </Box>
            )}
        </Card>
    );
}
