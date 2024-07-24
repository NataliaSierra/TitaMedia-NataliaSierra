import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthUserContext';

export const ProtectedAplicationRoutes = () => {

  const { userDataFromGoogleLogin } = useContext(AuthUserContext);
  console.log('🚀🚀🚀  > > > > ProtectedAplicationRoutes > > > > userDataFromGoogleLogin:', userDataFromGoogleLogin);

    const IsUserAuthValid = userDataFromGoogleLogin?.jti;

    if (!IsUserAuthValid) {
      return <Navigate to="/"/>
    }

  return (
    <Outlet/>
  )
}
