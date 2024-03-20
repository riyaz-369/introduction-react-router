import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;

    return (
        <div>
            <h2>Details of users</h2>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UsersDetails;