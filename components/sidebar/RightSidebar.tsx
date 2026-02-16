
"use client";

import {
    Card,
    CardContent,
    Typography,
    Stack,
    Box,
    Button,
    Avatar,
} from '@mui/material';
import { Info, ExpandMore } from '@mui/icons-material';

const TRENDING_TOPICS = [
    { title: 'Tech job market updates', readers: '12,094' },
    { title: 'New AI regulations proposed', readers: '8,432' },
    { title: 'Remote work trends 2024', readers: '145,210' },
    { title: 'Startup funding landscape', readers: '5,600' },
    { title: 'Sustainable energy breakthroughs', readers: '3,200' },
];

const SUGGESTIONS = [
    { name: 'John Doe', title: 'Senior Developer at Google', avatar: 'https://ui-avatars.com/api/?name=John+Doe' },
    { name: 'Alice Smith', title: 'Recruiter at Amazon', avatar: 'https://ui-avatars.com/api/?name=Alice+Smith' },
    { name: 'Bob Johnson', title: 'Product Manager at Meta', avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson' },
];

export default function RightSidebar() {
    return (
        <Box sx={{ position: 'sticky', top: 20 }}>
            {/* Trending / News */}
            <Card sx={{ borderRadius: 2, mb: 2 }}>
                <CardContent sx={{ pt: 2, pb: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            LinkedIn News
                        </Typography>
                        <Info sx={{ fontSize: 16, color: 'text.secondary', cursor: 'pointer' }} />
                    </Stack>

                    <Stack spacing={2}>
                        {TRENDING_TOPICS.map((topic, index) => (
                            <Box key={index} sx={{ cursor: 'pointer' }}>
                                <Stack direction="row" alignItems="flex-start" spacing={1}>
                                    <Box sx={{ mt: 0.8, width: 6, height: 6, borderRadius: '50%', bgcolor: 'text.secondary' }} />
                                    <Box>
                                        <Typography variant="body2" fontWeight="600" color="text.primary">
                                            {topic.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {topic.readers} readers
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        ))}
                    </Stack>

                    <Button
                        endIcon={<ExpandMore />}
                        color="inherit"
                        sx={{ mt: 1, textTransform: 'none', color: 'text.secondary', ml: 1.5 }}
                    >
                        Show more
                    </Button>
                </CardContent>
            </Card>

            {/* Suggested Connections */}
            <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ pt: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            Add to your feed
                        </Typography>
                        <Info sx={{ fontSize: 16, color: 'text.secondary', cursor: 'pointer' }} />
                    </Stack>

                    <Stack spacing={2}>
                        {SUGGESTIONS.map((person, index) => (
                            <Stack key={index} direction="row" spacing={1.5} alignItems="flex-start">
                                <Avatar
                                    src={person.avatar}
                                    alt={person.name}
                                    sx={{ width: 48, height: 48 }}
                                />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="600">
                                        {person.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.2, mb: 1 }}>
                                        {person.title}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{ borderRadius: 4, textTransform: 'none', py: 0.5, px: 2, fontWeight: 600 }}
                                    >
                                        + Follow
                                    </Button>
                                </Box>
                            </Stack>
                        ))}
                    </Stack>

                    <Button
                        color="inherit"
                        sx={{ mt: 2, textTransform: 'none', color: 'text.secondary' }}
                    >
                        View all recommendations
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
