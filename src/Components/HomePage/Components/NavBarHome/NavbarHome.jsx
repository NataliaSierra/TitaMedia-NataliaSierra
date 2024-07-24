import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../../../Context/AuthUserContext";
import { useNavigate } from 'react-router-dom';
import logoutIcon from "../../../../assets/img/icons/logout-icon.svg"
import "./NavbarHome.css"

export const NavbarHome = () => {
  const navigate = useNavigate();
  const [imgProfile, setimgProfile] = useState("")

  const { userDataFromGoogleLogin, setUserDataFromGoogleLogin } = useContext(AuthUserContext);
  
  useEffect(() => {
    if (userDataFromGoogleLogin){
      setimgProfile(userDataFromGoogleLogin?.picture)
    }
  }, [userDataFromGoogleLogin])


  return (
    <nav className="homePage__main_container__navbar">
    <img src={imgProfile} alt={userDataFromGoogleLogin?.given_name} />
      <ul>
        <li>
          <a href="#sectionposts">
            go to posts
          </a>
        </li>
        <li>
          <a href="https://titamedia.com/" target="_blank">
            Visit Tita Media
          </a>
        </li>
      </ul>
      <button className="homePage__main_container__navbar__button_logout"
      onClick={() => {
        setUserDataFromGoogleLogin(null);
        navigate('/');
      }}>
        <img src={logoutIcon} alt="" />
      </button>
    </nav>
  )
}
