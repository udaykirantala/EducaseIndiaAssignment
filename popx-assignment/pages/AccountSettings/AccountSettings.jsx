import { Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "../../src/assets/EditPhotoIcon.png";
import Profile from "../../src/assets/ProfilePic.png";
import "./AccountSettings.css";
import { MobileContainer } from "../../components/MobileContainer/MobileContainer";

export const AccountSettings = () => {
  return (
    <MobileContainer>
      <div className="account-settings">
        <div className="account-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-section">
          <div className="profile-image-wrapper">
            <Avatar
              src={Profile}
              alt="Profile"
              className="profile-image"
            />

            <IconButton className="camera-btn">
              <img src={CameraAltIcon} alt="CameraAltIcon" className="cameraIcon"/>
            </IconButton>
          </div>

          <div className="profile-info">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div className="dashed-line"></div>
      </div>
    </MobileContainer>
  );
};