import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

const Input = styled.input`
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  ${(props) => {
    const color = props.color ? props.theme[props.color] : props.theme.primary;
    return css`
      ::-webkit-input-placeholder {
        /* Edge */
        color: ${darken(0.1, color)};
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${darken(0.1, color)};
      }

      ::placeholder {
        color: ${darken(0.1, color)};
      }
      /*background: ${lighten(0.15, color)};*/
    `;
  }}
`;

export default Input;
