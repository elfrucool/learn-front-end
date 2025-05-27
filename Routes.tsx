import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import App from './App';
import ProtectedRoute from './ProtectedRoute';

const Routes: React.FC = () => {
    return (
        <RouterRoutes>
            {/* Public routes */}
            <Route path="/login" element={<Login />}/>

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<App />}/>
            </Route>
            
            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />}/>
        </RouterRoutes>
    );
};

export default Routes;
