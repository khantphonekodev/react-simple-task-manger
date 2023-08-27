/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 1.2rem;
  margin-bottom: 12px;
`;

const Label = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;

const Error = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-red-700);
`;

function FormRow({ label, children, error }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children.props.id}>{label}</Label>
      {children}
      <Error>{error}</Error>
    </StyledFormRow>
  );
}

export default FormRow;
