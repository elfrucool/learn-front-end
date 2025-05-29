import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Typography, Button, Box} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStores } from 'shared/stores';
import theme from 'shared/theme';

const App: React.FC = observer(() => {
    const { authStore, clicksStore } = useStores();
    const navigate = useNavigate();

    let countText: string = `Click count: ${clicksStore.count}`;
    if (clicksStore.count == 0) {
        countText = 'Click the button to count';
    }

    const handleLogout = () => {
        authStore.logout();
        navigate('/login');
    };

    if (!authStore.isAuthenticated) {
        navigate('/login');
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md">
                <Box sx={{ my: 4, textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '16px', padding: '2rem' }}>
                    <Typography variant='h1' component='h1' gutterBottom color='primary'>
                        Hello, Material UI!
                    </Typography>
                    <Typography variant='body1' component='p'>Welcome to your new Material UI application</Typography>
                    <Typography variant='body2' component='div'
                        sx={{
                            fontStyle: clicksStore.count == 0 ? 'italic' : 'normal',
                            color: clicksStore.count == 0 ? 'warning.main' : 'info.main'
                        }}
                        onClick={() => clicksStore.reset()}
                    >
                        {countText}
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => clicksStore.increment()}
                        sx={{ mt: 2}}
                    >
                        Click me
                    </Button>
                </Box>
                <Box sx={{ my: 4, textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '16px', padding: '2rem' }}>
                    <Button
                        variant='contained'
                        color='secondary'
                        sx={{ mt: 2 }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
});

export default App;
