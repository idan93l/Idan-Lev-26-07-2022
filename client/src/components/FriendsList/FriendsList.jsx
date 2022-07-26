import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import noAvatar from "../../assests/profile_pictures/noAvatar.png";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";
import "./FriendsList.css";

function FriendsList({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendList.data);
        console.log(friends);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="friendsListContainer">
      {user.username !== currentUser.username && (
        <button className="friendButton" onClick={handleClick}>
          {followed ? "Unfollow" : "follow"}
          {followed ? <Remove /> : <Add />}
        </button>
      )}
      <h4 className="title"> - Friends - </h4>
      <div className="friendsList">
        {friends.map((friend) => (
          <Link
            to={`/profile/${friend.username}`}
            style={{ textDecoration: "none", color: "black" }}
            key={friend._id}
          >
            <div className="friend">
              <img
                src={friend.profilePicture ? friend.profilePicture : noAvatar}
                alt=""
                className="friendImg"
              />
              <span className="friendName">{friend.username}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
