import React from "react";
import "../style/dialogStyles.css";
import profile from "../static/img/profile.png";
import Cam from "./Cam"

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <img
          className="profile-img"
          src={profile}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <Cam></Cam>
          </dialog>
        )}
      </div>
    );
  }
}
