import { Search, Home, Chat } from "@mui/icons-material";
import profilePicture from "../../assests/profile_pictures/profile_picture_1.jpeg";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
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
        <img src={profilePicture} alt="" className="topbarImg" />
      </div>
    </div>
  );
}
