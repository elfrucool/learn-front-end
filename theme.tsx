import { createTheme} from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Default Material-UI blue
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#9c27b0', // Default Material-UI purple
            light: '#ba68c8',
            dark: '#7b1fa2',
            contrastText: '#fff',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
            main: '#ed6c02',
        },
        info: {
            main: '##0288d1',
        },
        success: {
            main: '#2e7d32',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        // Add more typography variants as needed
    },
    shape: {
        borderRadius: 8, // Default border radius
    },
    spacing: 8, // Default spacing unit (8px)
    components: {
        // You can customize specific components here
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Buttns text are not uppercase by default
                },
            },
        },
    },
});

// Add custom type for theme
declare module '@mui/material/styles' {
    interface Theme {
        // Add custom them properties here if needed
    }
    // Allow configuration using `createTheme`
    interface ThemeOptions {
        // Add custom theme options here if needed
    }
};

export default theme;