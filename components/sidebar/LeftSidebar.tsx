
"use client";

import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Stack,
    Box,
    Link,
} from '@mui/material';
import {
    BookmarkOutlined,
    PeopleAlt,
    Work,
} from '@mui/icons-material';
import { currentUser } from '@/data/user';

export default function LeftSidebar() {
    return (
        <Box sx={{ position: 'sticky', top: 20 }}>
            {/* Profile Card */}
            <Card sx={{ borderRadius: 2, mb: 2, overflow: 'visible' }}>
                <Box
                    sx={{
                        height: 60,
                        background: 'linear-gradient(45deg, #A0B4B7 30%, #BFBFBF 90%)',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        position: 'relative',
                    }}
                >
                    <Avatar
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        sx={{
                            width: 72,
                            height: 72,
                            border: '2px solid white',
                            position: 'absolute',
                            top: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            cursor: 'pointer',
                        }}
                    />
                </Box>
                <CardContent sx={{ pt: 6, pb: 2, textAlign: 'center' }}>
                    <Link
                        underline="hover"
                        color="text.primary"
                        sx={{ fontWeight: 600, fontSize: 16, cursor: 'pointer', display: 'block' }}
                    >
                        {currentUser.name}
                    </Link>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                        {currentUser.title}
                    </Typography>

                    <Divider sx={{ my: 2, mx: -2 }} />

                    <Stack spacing={1.5} alignItems="flex-start" sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                            <Typography variant="caption" color="text.secondary" fontWeight="600">
                                Connections
                            </Typography>
                            <Typography variant="caption" color="primary" fontWeight="600">
                                {currentUser.connectionsCount}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                            <Typography variant="caption" color="text.secondary" fontWeight="600">
                                Who viewed your profile
                            </Typography>
                            <Typography variant="caption" color="primary" fontWeight="600">
                                {currentUser.viewedProfile}
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{ my: 2, mx: -2 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <BookmarkOutlined sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.primary" fontWeight="600">
                            My Items
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Navigation Card */}
            <Card sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Stack spacing={0}>
                        <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                            <PeopleAlt sx={{ fontSize: 20, mr: 2, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary" fontWeight="600">
                                Groups
                            </Typography>
                        </Box>
                        <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                            <Work sx={{ fontSize: 20, mr: 2, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary" fontWeight="600">
                                Events
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
