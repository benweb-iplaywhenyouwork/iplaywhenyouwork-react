import React from "react";
import "../style/instructionStyles.css";
import iconGuide from "../static/img/icon/icon-guide.png";
export default class Instruction extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div>
        <div className="left-menu-guide left-menu" onClick={this.handleShowDialog}>
          <img className="icon-guide" src={iconGuide} alt="icon-guide"></img>
          <h5>이용안내</h5>
        </div>
        {this.state.isOpen && (
          <dialog
            className="instruction"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <div style={{color: '#999'}}>전체수강강좌 버튼을 통해 게임을 시작해보세요!</div>
          </dialog>
        )}
      </div>
    );
  }
}
