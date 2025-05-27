import { 
    Box, 
    Button, 
    Container, 
    CssBaseline, 
    TextField, 
    ThemeProvider, 
    Typography, 
    Avatar, 
    FormControlLabel, 
    Checkbox, 
    Link, 
    Grid 
  } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStores} from './stores';
import theme from './theme';



const Login: React.FC = observer(() => {
    const [remember, setRemember] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const { authStore } = useStores();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email != '' && password != '') {
            const fakeToken = 'fake-jwt-token';
            authStore.login(fakeToken);
            navigate('/');
        }
    };

    
    // TODO: add state & form processing logic
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete='current-password'
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="remember"
                                    color="primary"
                                    checked={remember}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRemember(e.target.checked)}/>
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Link href="#" variant="body2">
                                Forgot Password?
                            </Link>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
});

export default Login;