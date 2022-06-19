import React from "react";
import styled from "styled-components";
import profile from "../static/img/profile.png";
import yang from "../static/img/yang.png";

function Cell({ num, handleClick }) {
  return (
    <Container onClick={() => handleClick(num)}>
      {num > 1 ? <img className="main-course-profile" src={yang} alt="main-course-profile"/> : <img className="main-course-profile" src={profile} alt="main-course-profile"/>}
      
    </Container>
  );
}

const Container = styled.div`
  width : 50px;
  height : 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default Cell;