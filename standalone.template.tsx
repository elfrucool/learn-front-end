// This file will bootstrap the micro-frontend in standalone mode
// Directions: copy to packages/<micro-frontend>/src/standalone.tsx and replace Foo with proper element
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'shared';

// Replace this line with your main element name and path
import Foo from 'pages/foo';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                {/*replace element with yours*/}
                <Foo/>
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
);
