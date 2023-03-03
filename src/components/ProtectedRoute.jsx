import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (user === undefined) {
    return <p>Loading...</p>;
  } else {
    if (user === null || (requireAdmin && !user.isAdmin)) {
      return <Navigate to='/' replace />;
    }
  }

  return children;
}
