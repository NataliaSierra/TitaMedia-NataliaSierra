import { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import TitaMediaLogo from "../../assets/img/TITA_MEDIA_LOGO.png"
import LogoGitHub from "../../assets/img/GITHUB_LOGO.png"
import LinkedInLogo from "../../assets/img/LINKEDIN_LOGO.webp"
import { AuthUserContext } from '../../Context/AuthUserContext';
import "./LoginPage.css"

export const LoginPage = () => {
  const navigate = useNavigate();

  const { setUserDataFromGoogleLogin } = useContext(AuthUserContext);

  return (
    <div className='loginpage__main_container'>
      <a href="https://titamedia.com/" target='_blank'>
        <img className='loginpage__main_container_img_TitaMediaLogo' src={TitaMediaLogo} alt="Tita media Logo" /> 
      </a>
      <h1 className='loginpage__main_container__title'>Prueba Técnica - Natalia Sierra Salamando</h1>
      <p className='loginpage__main_container__subtitle'>Inicia sesión con tu cuenta Google para empezar</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const details = jwtDecode(credentialResponse.credential);
          setUserDataFromGoogleLogin(details)
          navigate('/home');
        }}
        onError={() => {
          console.error('Login Failed');
          navigate('/');
        }}
      />
      <div className='loginpage__main_container__social'>
      <a href="https://github.com/NataliaSierra/TitaMedia-NataliaSierra" target='_blank'>
        <img src={LogoGitHub} alt="GitHub Logo" /> 
      </a>
      <a href="https://www.linkedin.com/in/nataliasierradev-frontend/" target='_blank'>
        <img src={LinkedInLogo} alt="LinkedIn Logo" /> 
      </a>
      </div>
    </div>
  );
};
