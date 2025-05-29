import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'shared';
import Routes  from './routes/Routes';
import ProtectedRoute from './routes/ProtectedRoute';

// Import the Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <Routes/>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);

export { default as ProtectedRoute } from './routes/ProtectedRoute';
export { default as Routes } from './routes/Routes';