import styled from "styled-components";
import darken from "polished";

/*           className="border border-yellow-400  bg-yellow-50 mb-2" */
export const DateInput = styled.input`
  border: 1px;
  background: ${(props) => props.theme.primary};
  bordercolor: ${(props) => props.theme.primary};
`;
