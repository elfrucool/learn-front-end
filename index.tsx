import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App: React.FC = () => {
    return (
        <div className='container'>
            <header className="header">
                <h1>Hello, World!</h1>
            </header>
            <main>
                <h2>Welcome to the Learning Frontend Journey</h2>
                <p>This is a minimal CSS setup with some basic styling</p>
                <button className="button">Click me</button>
            </main>
        </div>
    );
};

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);