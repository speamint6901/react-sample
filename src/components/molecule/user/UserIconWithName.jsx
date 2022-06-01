import styled from "styled-components";
import React, { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";
import axios from "axios";

// memoで再レンダリングを防ぐ
export const UserIconWithName = memo((props) => {
  const userInfo = useRecoilValue(userState);
  const { image, name } = props;
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg width={160} height={160} alt={name} src={image} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

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

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
