import { styled } from "styled-components";
import TaskActions from "../features/tasks/TaskActions";
import AllTasks from "../features/tasks/AllTasks";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  width: 60%;
  margin: 40px auto;
  height: 90vh;
  overflow: hidden;
  border-radius: 25px;

  padding: 20px 40px;
  background-color: var(--color-grey-300);
`;

function Tasks() {
  return (
    <StyledDiv>
      <TaskActions />
      <AllTasks />
    </StyledDiv>
  );
}

export default Tasks;
