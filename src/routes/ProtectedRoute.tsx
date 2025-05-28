import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores';

const ProtectedRoute: React.FC = observer(() => {
    const { authStore } = useStores();
    return authStore.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
});

export default ProtectedRoute;