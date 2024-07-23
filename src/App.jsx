import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { ProtectedAplicationRoutes } from "./Router/ProtectedAplicationRoutes";
import { LoginPage } from "./Components/Login/LoginPage";

function App() {

  const isAuth= false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <h1>HOME APLICATION</h1> : <LoginPage /> }/>
        <Route element={<ProtectedAplicationRoutes /> }>
          <Route path="/home" element={<h1>HELLO HOME</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
