import React from "react";
import styled from "styled-components";
/*
        <Bars3Icon className="text-lime-600 h-7 m-1 mx-4 dropdown " />
*/
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.bgGray};
`;

export const HeaderIcon = styled.div`
  color: ${(props) => props.theme.primary};
  width: 1.5rem;
  height: 1rem;
  margin: 0.5rem;
`;

export const HeaderTitle = styled.div`
  margin: 0.5rem;
  color: ${(props) => props.theme.primary};
`;
