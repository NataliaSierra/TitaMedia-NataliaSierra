import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedAplicationRoutes } from "./Router/ProtectedAplicationRoutes";
import { LoginPage } from "./Components/Login/LoginPage";
import { HomePage } from "./Components/HomePage/HomePage";
import { AuthUserContext } from "./Context/AuthUserContext";
import './App.css'

function App() {

  const { userDataFromGoogleLogin } = useContext(AuthUserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userDataFromGoogleLogin?.jti ? <HomePage /> : <LoginPage /> }/>
        <Route element={<ProtectedAplicationRoutes /> }>
          <Route path="/home" element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
