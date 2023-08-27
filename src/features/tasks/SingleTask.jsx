/* eslint-disable react/prop-types */
import { css, styled } from "styled-components";
import Modal from "../../ui/Modal";
import CreateTaskForm from "./CreateTaskForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteTask } from "./useDeleteTask";
import { Heading } from "../../ui/Heading";
import { useUpdateTask } from "./useUpdateTask";

const variations = {
  unconfirmed: css`
    background-color: var(--color-grey-700);
  `,

  completed: css`
    background-color: var(--color-green-700);
  `,
};

const StyledTask = styled.div`
  ${(props) => variations[props.status]}
  font-size: 16px;
  color: var(--color-grey-0);
  border-radius: 25px;
  padding: 20px;
  position: relative;
  min-height: 100px;
  max-height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledActionsGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  position: absolute;
  bottom: 12px;
  right: 20px;
`;

const types = {
  edit: "background-color : var(--color-indigo-700)",
  delete: "background-color : var(--color-red-700)",
  complete: "background-color : var(--color-green-700)",
};

const Pill = styled.button`
  padding: 8px 12px;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 12px;
  border-radius: 25px;
  backdrop-filter: blur(4px);
  ${(props) => types[props.type]}
`;

function SingleTask({ task }) {
  const { mutateDeleteTask, isDeletingTask } = useDeleteTask();
  const { mutateUpdateTask, isUpdatingTask } = useUpdateTask();
  return (
    <StyledTask status={task?.status}>
      <Heading as="h2">{task.name}</Heading>
      <StyledActionsGroup>
        {task.status !== "completed" && (
          <Pill
            type="complete"
            onClick={() =>
              mutateUpdateTask({
                data: { status: "completed" },
                idToEdit: task.id,
              })
            }
            disabled={task.status === "completed"}
          >
            Complete
          </Pill>
        )}
        <Modal>
          <Modal.OpenButton value={task.id}>
            <Pill type="edit">Edit</Pill>
          </Modal.OpenButton>
          <Modal.Content value={task.id}>
            <CreateTaskForm task={task} />
          </Modal.Content>
          <Modal.OpenButton value="delete">
            <Pill type="delete">Delete</Pill>
          </Modal.OpenButton>
          <Modal.Content value="delete">
            <ConfirmDelete
              onConfirm={() => mutateDeleteTask(task.id)}
              disabled={isDeletingTask || isUpdatingTask}
            />
          </Modal.Content>
        </Modal>
      </StyledActionsGroup>
    </StyledTask>
  );
}

export default SingleTask;
