import { styled } from "styled-components";
import CreateTaskForm from "./CreateTaskForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TaskActions() {
  return (
    <>
      <StyledDiv>
        <h2>Task Manager</h2>
        <div>
          <Modal>
            <Modal.OpenButton value="create">
              <Button type="primary">Add Task </Button>
            </Modal.OpenButton>
            <Modal.Content value="create">
              <CreateTaskForm />
            </Modal.Content>
          </Modal>
        </div>
      </StyledDiv>
    </>
  );
}

export default TaskActions;
