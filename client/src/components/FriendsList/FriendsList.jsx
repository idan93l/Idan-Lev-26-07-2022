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
  const [isFriend, setIsFriend] = useState(
    currentUser.friends.includes(user?.id)
  );

  console.log(isFriend);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`/users/friends/${user._id}`);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (!isFriend) {
        await axios.put(`/users/${user._id}/unfriend`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFRIEND", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/addFriend`, {
          userId: currentUser._id,
        });
        dispatch({ type: "ADD_FRIEND", payload: user._id });
      }
      setIsFriend(!isFriend);
    } catch (err) {}
  };

  return (
    <div className="friendsListContainer">
      {user.username !== currentUser.username && (
        <button className="friendButton" onClick={handleClick}>
          {isFriend ? "Unfriend" : "Add Friend"}
          {isFriend ? <Remove /> : <Add />}
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
