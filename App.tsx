import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Button, Box} from '@mui/material';
import theme from './theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md">
                <Box sx={{ my: 4, textAlign: 'center' }}>
                    <Typography variant='h3' component='h1' gutterBottom>
                        Hello, Material UI!
                    </Typography>
                    <Typography variant='body1' component='p'>
                        Welcome to your new Material UI application
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => alert('Button clicked!')}
                        sx={{ mt: 2}}
                    >
                        Click me
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default App;
