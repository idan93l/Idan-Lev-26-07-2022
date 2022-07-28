import "./Topbar.css";
import { Search, Home, Chat } from "@mui/icons-material";
import profilePicture from "../../assests/profile_pictures/profile_picture_1.jpeg";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social-Era</span>
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
