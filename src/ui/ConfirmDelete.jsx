/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { Heading } from "./Heading";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
function ConfirmDelete({ resource, onConfirm, onCloseModal, disabled }) {
  function handleConfirmClick() {
    onConfirm();
  }
  return (
    <StyledConfirmDelete>
      <Heading>Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>
      <div>
        <Button onClick={() => onCloseModal()}>Cancel</Button>
        <Button type="danger" onClick={handleConfirmClick} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
