import Topbar from "../../components/Topbar/Topbar";
import profilePicture from "../../assests/profile_pictures/profile_picture_7.jpeg";
import "./Profile.css";
import FriendsList from "../../components/FriendsList/FriendsList";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="innerProfileContainer">
          <img className="profileUserImg" src={profilePicture} alt="" />
          <div className="profileInfo">
            <h4 className="profileInfoName">Safak Kocaoglu</h4>
          </div>
        </div>
        <FriendsList />
      </div>
    </>
  );
}
