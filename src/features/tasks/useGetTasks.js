import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export function useGetTasks() {
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  console.log(tasks);

  return { tasks, isLoading, error };
}
