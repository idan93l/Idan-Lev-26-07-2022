import { Search, Home, Chat } from "@mui/icons-material";
import noAvatar from "../../assests/profile_pictures/noAvatar.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"
import "./Topbar.css";

export default function Topbar() {
  const {user} = useContext(AuthContext)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social-Era</span>
        </Link>
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Home />
          {/* <span className="topbarIconBadge">1</span> */}
        </div>
        <div className="topbarIconItem">
          <Chat />
          {/* <span className="topbarIconBadge">2</span> */}
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? user.profilePicture : noAvatar} alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
