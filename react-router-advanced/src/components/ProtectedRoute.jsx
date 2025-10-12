import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 👈 ensure this exists

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // 👈 this is the missing part (useAuth hook)

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
