import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedAplicationRoutes = () => {

      const IsUserAuth = false

    if (!IsUserAuth) {
      return <Navigate to="/"/>
    }

  return (
    <Outlet/>
  )
}
