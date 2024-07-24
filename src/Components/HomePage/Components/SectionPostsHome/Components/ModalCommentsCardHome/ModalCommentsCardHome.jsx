import PropTypes from 'prop-types';
import "./ModalCommentsCardHome.css"
import UseGetComments from '../../../../../../CsutomHooks/UseGetComments';
import commentsDots from '../../../../../../assets/img/icons/comment-dots.svg'

export const ModalCommentsCardHome = ({ idCurrentPost, setClose }) => {

  const dataCommentsPost = UseGetComments({ idPost: idCurrentPost });

  return (
    <div className='container_fixed_modal_comments' onClick={() => setClose()}>
      <div className='cont_modal_comments'>
        <img src={commentsDots} alt="comment_icon" />
        {dataCommentsPost?.commentsByPost?.length > 0 ? (
          dataCommentsPost?.commentsByPost?.map((commet, index) => (
            <div className='comment' key={index}>
              <p>{commet.message}</p>
            </div>
          ))
        ) : (
          <h4> No comments yet </h4>
        )}
        <button className='btn_close_modal_comments' 
          onClick={() => setClose()}
        >
          Close
        </button>
      </div>
    </div>
  );
}

ModalCommentsCardHome.propTypes = {
  idCurrentPost: PropTypes.string.isRequired,
  setClose: PropTypes.func.isRequired
};