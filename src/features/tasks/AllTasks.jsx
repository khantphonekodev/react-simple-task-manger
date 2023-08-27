import { styled } from "styled-components";
import { useGetTasks } from "./useGetTasks";
import SingleTask from "./SingleTask";

const StyledTasks = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.4rem;
  height: 100vh;
  overflow-y: scroll;
`;

function AllTasks() {
  const { tasks, isLoading: isGettingTasks } = useGetTasks();

  if (isGettingTasks) return null;

  return (
    <StyledTasks>
      {tasks.tasks.map((task) => (
        <SingleTask task={task} key={task.id} />
      ))}
    </StyledTasks>
  );
}

export default AllTasks;
