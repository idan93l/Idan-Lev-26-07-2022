import Topbar from "../../components/Topbar/Topbar";
import noAvatar from "../../assests/profile_pictures/noAvatar.png";
import FriendsList from "../../components/FriendsList/FriendsList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  },[username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="innerProfileContainer">
          <img className="profileUserImg" src={user.profilePicture || noAvatar} alt="" />
          <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <h4 className="profileInfoEmail">{user.email}</h4>
          </div>
        </div>
        <FriendsList user={user}/>
      </div>
    </>
  );
}
