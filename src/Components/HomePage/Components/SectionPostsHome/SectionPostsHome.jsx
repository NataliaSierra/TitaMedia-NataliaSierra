import { useContext } from "react";
import { ApiContext } from "../../../../Context/API/ApiContext";
import "./SectionPostsHome.css"
import { CardHomePosts } from "./Components/cardHome/CardHomePosts";


export const SectionPostsHome = () => {

  const { allPosts } = useContext(ApiContext);

  return (
    <section className="homePage__main_container__container_posts" id="sectionposts">

      <article className="container__dropdown_tags_select">
        <p>
          Filter: 
        </p>
        <div className="dropdown">
          <div className="dropdown__option">Option 1</div>
        </div>
      </article>

      <section className="mian_conatiner__card_home">
      {
        allPosts && 
        allPosts?.data?.map((card)=>{    
          
          return (
            <>
              <CardHomePosts dataPost={card} />
            </>
          )
        })
      }
      </section>
    </section>  
  )
}
