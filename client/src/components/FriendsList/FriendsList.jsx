import "./FriendsList.css";
import profileImage1 from "../../assests/profile_pictures/profile_picture_2.jpeg";
import profileImage2 from "../../assests/profile_pictures/profile_picture_3.jpeg";
import profileImage3 from "../../assests/profile_pictures/profile_picture_4.jpeg";
import profileImage4 from "../../assests/profile_pictures/profile_picture_5.jpeg";
import profileImage5 from "../../assests/profile_pictures/profile_picture_6.jpeg";
import profileImage6 from "../../assests/profile_pictures/profile_picture_8.jpeg";

function FriendsList({user}) {
  return (
    <div className="friendsListContainer">
      <h4 className="title"> - Friends - </h4>
      <div className="friendsList">
        <div className="friend">
          <img src={profileImage1} alt="" className="friendImg" />
          <span className="friendName">John Carter</span>
        </div>
        <div className="friend">
          <img src={profileImage2} alt="" className="friendImg" />
          <span className="friendName">John Carter</span>
        </div>
        <div className="friend">
          <img src={profileImage3} alt="" className="friendImg" />
          <span className="friendName">John Carter</span>
        </div>
        <div className="friend">
          <img src={profileImage4} alt="" className="friendImg" />
          <span className="friendName">John Carter</span>
        </div>
        <div className="friend">
          <img src={profileImage5} alt="" className="friendImg" />
          <span className="friendName">John Carter</span>
        </div>
        <div className="friend">
          <img src={profileImage6} alt="" className="friendImg" />
          <span className="friendName">John Carter</span>
        </div>
      </div>
    </div>
  );
}

export default FriendsList;
