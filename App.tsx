import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Button, Box} from '@mui/material';
import theme from './theme';

const App: React.FC = () => {
    const [clickCount, setClickCount] = useState<number>(0);

    
    let countText: string = `Click count: ${clickCount}`;
    if (clickCount == 0) {
        countText = 'Click the button to count';
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
                    <Typography variant='body2' component='div' sx={{ fontStyle: clickCount == 0 ? 'italic' : 'normal', color: clickCount == 0 ? 'warning.main' : 'info.main'}} onClick={() => setClickCount(0)}>{countText}</Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => setClickCount(clickCount + 1)}
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
