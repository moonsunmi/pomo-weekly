import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  /* 공통 스타일 */
  border-radius: 0.5rem;
  padding: 1rem;

  margin: 1rem;
  /* 색상 */
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

export const ContainerTitle = styled.div`
  ${(props) => {
    const color = props.color ? props.theme[props.color] : props.theme.primary;
    return css`
      font-size: 115%;
      text-align: center;
      color: ${darken(0.5, color)};
      background: ${lighten(0.15, color)};
      border-bottom: 1px solid ${darken(0.1, color)};
      margin-bottom: 1rem;
    `;
  }}
`;
