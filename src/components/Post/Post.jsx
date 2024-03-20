import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;

    const postStyles = {
        border: '2px solid blue',
        padding: '16px',
        borderRadius: '10px',
        marginBottom: '10px'
    }

    const navigate = useNavigate();
    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyles}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Post details</button></Link>
            <button onClick={handleShowDetail}>Click show detail</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
}

export default Post;