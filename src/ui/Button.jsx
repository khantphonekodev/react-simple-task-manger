/* eslint-disable react/prop-types */
import { css, styled } from "styled-components";
const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  padding: 12px 36px;
  ${(props) => variations[props.type]};
  color: white;
  border-radius: 25px;
  outline: none;
  border: none;
`;

export default Button;
