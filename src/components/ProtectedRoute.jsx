import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Loading from './Loading/Loading';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { isLoading, user } = useAuthContext();

  if (isLoading) {
    return <Loading />;
  } else if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}
