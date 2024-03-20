import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const { id, title, body } = postDetail;

    const {postId} = useParams();
    console.log(postId);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;