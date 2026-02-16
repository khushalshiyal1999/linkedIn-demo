
"use client";

import {
    Card,
    CardContent,
    Avatar,
    Stack,
    TextField,
    Button,
} from '@mui/material';
import {
    PhotoSizeSelectActualOutlined,
    CalendarMonthOutlined,
    ArticleOutlined,
} from '@mui/icons-material';
import { currentUser } from '@/data/user';

export default function CreatePost() {
    return (
        <Card sx={{ borderRadius: 2, mb: 2 }}>
            <CardContent>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        sx={{ width: 48, height: 48 }}
                    />
                    <TextField
                        fullWidth
                        placeholder="Start a post"
                        size="medium"
                        variant="outlined"
                        InputProps={{
                            sx: {
                                borderRadius: 24,
                                height: 48,
                                '& legend': { display: 'none' },
                                '& fieldset': { top: 0 },
                            }
                        }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ px: 1 }}
                >
                    <Button
                        startIcon={<PhotoSizeSelectActualOutlined sx={{ color: '#378fe9' }} />}
                        sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600 }}
                    >
                        Media
                    </Button>
                    <Button
                        startIcon={<CalendarMonthOutlined sx={{ color: '#c37d16' }} />}
                        sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600 }}
                    >
                        Event
                    </Button>
                    <Button
                        startIcon={<ArticleOutlined sx={{ color: '#e06847' }} />}
                        sx={{ textTransform: 'none', color: 'text.secondary', fontWeight: 600 }}
                    >
                        Write article
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}
