import PropTypes from 'prop-types';
import "./ModalOwnerCardHome.css"

export const ModalOwnerCardHome = ({ data, setClose }) => {
  return (
    <div className='container_fixed_modal_owner' onClick={() => setClose()}>
      <div className='cont_modal_owner'>
        <h3>User detail</h3>
        {data && <>
          <div className='container_detail_user_data'>
            <img src={data.picture} alt={data.firstName} />
            <h4>{data.firstName} {data.lastName}</h4>
          </div>
        </>
        }
        <button className='btn_close_modal_owner' onClick={() => setClose()}>
          Close
        </button>
      </div>
    </div>
  );
}

ModalOwnerCardHome.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired,
  setClose: PropTypes.func.isRequired
};