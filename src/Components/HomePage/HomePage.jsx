
import { NavbarHome } from "./Components/NavBarHome/NavbarHome"
import { SectionPostsHome } from "./Components/SectionPostsHome/SectionPostsHome"
import "./HomePage.css"

export const HomePage = () => {

  return (
    <>
      <section className="homePage__main_container">
        <NavbarHome />
        <SectionPostsHome />
        
      </section>
    </>
  )
}
