import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthUserContext';

export const ProtectedAplicationRoutes = () => {
  const { userDataFromGoogleLogin } = useContext(AuthUserContext);

  const IsUserAuthValid = userDataFromGoogleLogin?.jti;

  if (!IsUserAuthValid) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
