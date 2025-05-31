import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'shared';

import App from './pages/App';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <App/>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);
