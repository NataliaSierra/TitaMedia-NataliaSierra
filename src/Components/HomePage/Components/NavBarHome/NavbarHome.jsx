import { useContext } from "react";
import { AuthUserContext } from "../../../../Context/AuthUserContext";
import "./NavbarHome.css"

export const NavbarHome = () => {
  const { userDataFromGoogleLogin, setUserDataFromGoogleLogin } = useContext(AuthUserContext);
  console.log('🚀🚀🚀  > > > > HomePage > > > > userDataFromGoogleLogin:', userDataFromGoogleLogin);

  return (
    <nav className="homePage__main_container__navbar">
    <img src={userDataFromGoogleLogin.picture || ""} alt={userDataFromGoogleLogin.given_name || ""} />
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
        window.location('/');
      }}>
        Logout
      </button>
    </nav>
  )
}
