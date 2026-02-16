
"use client";
import { Container, Grid, Box } from '@mui/material';
import LeftSidebar from '@/components/sidebar/LeftSidebar';
import RightSidebar from '@/components/sidebar/RightSidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f3f2ef', py: 3 }}>
            <Container maxWidth="xl">
                <Grid container spacing={3} component={'div' as any}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                        component={'div' as any}
                    >
                        <LeftSidebar />
                    </Grid>

                    {/* Center Feed */}
                    <Grid item xs={12} md={8} lg={6} component={'div' as any}>
                        {children}
                    </Grid>

                    {/* Right Sidebar */}
                    <Grid
                        item
                        xs={12} // Adjusted to valid grid size, hidden by sx
                        lg={3}
                        sx={{ display: { xs: 'none', lg: 'block' } }}
                        component={'div' as any}
                    >
                        <RightSidebar />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
