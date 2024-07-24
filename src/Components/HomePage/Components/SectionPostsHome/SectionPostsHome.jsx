import { useContext, useState } from "react";
import { ApiContext } from "../../../../Context/API/ApiContext";
import "./SectionPostsHome.css";
import { CardHomePosts } from "./Components/cardHome/CardHomePosts";

export const SectionPostsHome = () => {
  const { allPosts } = useContext(ApiContext);
  const [selectedTag, setSelectedTag] = useState("select");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["select", "grey", "canine", "person", "beach", "water", "husky", "outdoors"];

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setIsDropdownOpen(false);
  };

  const filteredPosts = selectedTag === "select"
    ? allPosts?.data
    : allPosts?.data.filter(post => post.tags.includes(selectedTag));

  return (
    <section className="homePage__main_container__container_posts" id="sectionposts">
      <article className="container__dropdown_tags_select">
        <p>Filter:</p>
        <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className="dropdown__selected">{selectedTag}</div>
          {isDropdownOpen && (
            <div className="dropdown__options">
              {options.map(option => (
                <div
                  key={option}
                  className="dropdown__option"
                  onClick={() => handleTagChange(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </article>

      <section className="mian_conatiner__card_home">
        {filteredPosts && filteredPosts.map((card) => (
          <CardHomePosts key={card.id} dataPost={card} />
        ))}
      </section>
    </section>
  );
};
