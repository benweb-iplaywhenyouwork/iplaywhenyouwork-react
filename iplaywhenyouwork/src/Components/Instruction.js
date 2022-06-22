import React from "react";
import "../style/instructionStyles.css";
import MatchInitial from "./MatchInitial";
import iconGuide from "../static/img/icon/icon-guide.png";
export default class Instruction extends React.Component {
  state = { isOpen: false, Chosung: "" };

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
          >
            <div className="chosung-menu" >
              <div style={{color: '#999', position: "absolute", left:"10px"}} onClick={() => this.setState({Chosung: "문학"})}>문학</div>
              <div style={{color: '#999', position: "absolute", left:"45px"}} onClick={() => this.setState({Chosung: "일반"})}>일반</div>
              <div style={{color: '#999', position: "absolute", left:"80px"}} onClick={() => this.setState({Chosung: "역사"})}>역사</div>
              <div style={{color: '#999', position: "absolute", left:"115px"}} onClick={() => this.setState({Chosung: "영화"})}>영화</div>
              <div style={{color: '#999', position: "absolute", left:"150px"}} onClick={() => this.setState({Chosung: ""})}>리셋</div>
            </div>
        {this.state.Chosung ? <MatchInitial inputField={this.state.Chosung}/>:null}
          </dialog>
          
        )}
      </div>
    );
  }
}
