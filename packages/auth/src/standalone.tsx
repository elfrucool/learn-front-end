import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'shared';

// Replace this line with your main element name and path
import Login from './pages/Login';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <Login/>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);
