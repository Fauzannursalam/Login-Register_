import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarWrapper from "../../components/NavbarWrapper";

const Profile = () => {
  const [user, setUser] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <>
    <NavbarWrapper />
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={user.avatar}
            style={{ borderRadius: "200px", width: "200px", height: "200px" }}
          />
          <h3 className="">Id : {user.id}</h3>
          <h3 className="fw-bolder">
            {user.first_name} {user.last_name}
          </h3>
          <h3 className="fw-normal">{user.email}</h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
