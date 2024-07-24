
import PropTypes from 'prop-types';
import infoCircle from '../../../../../../assets/img/icons/info-circle.svg'
import commentsDots from '../../../../../../assets/img/icons/comment-dots.svg'
import likeIcon from '../../../../../../assets/img/icons/like-right.svg'
import "./CardHomePosts.css"
import { useContext, useState } from 'react';
import { ApiContext } from '../../../../../../Context/API/ApiContext';
import { ModalCommentsCardHome } from '../ModalCommentsCardHome/ModalCommentsCardHome';
import { ModalOwnerCardHome } from '../ModalOwnerCardHome/ModalOwnerCardHome';

export const CardHomePosts = ({ dataPost }) => {

    const {currentIdPost, setCurrentIdPost } = useContext(ApiContext);
    const [currentPostData, setCurrentPostData] = useState({});

    const [openCloseModalComments, setOpenCloseModalComments] = useState(false);
    const [openCloseModalOwner, setOpenCloseModalOwner] = useState(false);

    const handleToggleModalComments = (postID) => {
      setCurrentIdPost(postID);
      setOpenCloseModalComments(!openCloseModalComments);
    };

    const handleToggleModalOwner = (post) => {
      setCurrentPostData(post.owner);
      setOpenCloseModalOwner(!openCloseModalOwner);
    };


  return (
    <>
      <article className="container_card">
        <div className="container_card_user">
          <div className="container_user">
            <div className="container_image_user">
              <img src={dataPost?.owner?.picture} className="image_user" alt="" />
            </div>
            <div className="container_info_user">
              <p>{dataPost?.owner?.firstName} {dataPost?.owner?.lastName}</p>
            </div>
          </div>
          <div className="container_icon_user_information">
            <button className="icon_information_button"
              onClick={() => {
                handleToggleModalOwner(dataPost);
              }}
            >
              <img
                src={infoCircle}
                className="image_icon_information"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="container_image_card">
          <img src={dataPost?.image} className="image_card" alt="" />
        </div>
        <div className='col_data_card'>
          <div className="card_contain_text">
            <div className="card_contain_title">
              <p>Labrador Retriever</p>
            </div>
          </div>
          <div className="card_contain_tags">
            {
              dataPost.tags.map((tag, index) => {
                return (
                  <div key={`tag-${index}`} className="card_tag">
                    <p>{tag}</p>
                  </div>
                )
              })

            }
          </div>
          <div className="card_contain_interaction">
            <div className="button_interaction_cards">
              <div className="likes_interaction_card">
                <img src={likeIcon} className="like_icon" alt="" />
              </div>
              <button className="comments_interaction_card"
              onClick={() => {
                handleToggleModalComments(dataPost.id);
              }}
              >
                <img
                  src={commentsDots}
                  className="comment_icon"
                  alt=""
                />
                <p>Comments</p>
              </button>
            </div>
            <div className="likes_interaction_card_text">
              <p>{dataPost.likes} Likes</p>
            </div>
          </div>

        </div>
      </article>

      {openCloseModalComments && (
        <ModalCommentsCardHome
          idCurrentPost={currentIdPost}
          setClose={handleToggleModalComments}
        />
      )}
      {openCloseModalOwner && (
        <ModalOwnerCardHome data={currentPostData} setClose={setOpenCloseModalOwner} />
      )}
    </>
  )
}

const ItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
});

CardHomePosts.propTypes = {
  dataPost: ItemShape.isRequired
};