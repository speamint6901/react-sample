import styled from "styled-components";
import React, { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const context = useContext(UserContext);
  console.log(context);
  return (
    <SContainer>
      <SImg width={160} height={160} alt={name} src={image} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  color: #40514e;
`;
