import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

export const WeekContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const WeekIcon = styled.div`
  color: ${(props) => props.theme.primary};
  width: 1.5rem;
  height: 1rem;
  margin: 0.5rem;
`;

export const Aday = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;

  ${(props) => {
    const color = props.color ? props.theme[props.color] : props.theme.primary;

    return css`
      color: ${darken(0.5, color)};
      background: ${lighten(0.15, color)};
      border: 1px solid ${darken(0.1, color)};
      border-bottom: 1px solid ${darken(0.3, color)};
    `;
  }}
`;

export const AdayDetail = styled.div`
  color: gray;
  padding-left: 5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.bgGray};
`;
