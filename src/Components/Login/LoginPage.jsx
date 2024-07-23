import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import TitaMediaLogo from "../../assets/img/TITA_MEDIA_LOGO.png"
import "./LoginPage.css"

export const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div className='loginpage__main_container'>
      <img className='loginpage__main_container_img_TitaMediaLogo' src={TitaMediaLogo} alt="Tita media Logo" />
      <h1 className='loginpage__main_container__title'>Prueba Técnica - Natalia Sierra Salamando</h1>
      <p className='loginpage__main_container__subtitle'>Inicia sesión con tu cuenta Google para empezar</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const details = jwtDecode(credentialResponse.credential);
          console.log('🚀🚀🚀  > > > > LoginPage > > > > details:', details);
          navigate('/home');
        }}
        onError={() => {
          console.error('Login Failed');
          navigate('/');
        }}
      />
    </div>
  );
};
