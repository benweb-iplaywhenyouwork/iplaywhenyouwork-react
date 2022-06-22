import React from "react";
import "../style/dialogStyles.css";


export default class NameComponent extends React.Component {
  state = { isOpen: false, profileName: "서예빈" };

  

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  handleSubmit(event) {
    this.handleShowDialog();
    event.preventDefault();
  }

  handleChange(event) {
    console.log(1)
    this.setState({profileName: event.target.value});
  };

  render() {
    return (
      <div>
        <div className="profile-name" onClick={this.handleShowDialog}>{this.state.profileName}</div>
        
        {this.state.isOpen && (
          <dialog
            className="name"
            style={{ position: "absolute" }}
            open
          >
            <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text"  onChange={e => this.handleChange(e)}></input>
            </form>
          </dialog>
        )}
      </div>
    );
  }
}
