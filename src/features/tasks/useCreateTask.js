import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../../services/apiTasks";
import { toast } from "react-hot-toast";

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { mutate: mutateCreateTask, isLoading: isCreatingTask } = useMutation({
    mutationFn: (task) => createTask(task),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added to your list successfully");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { mutateCreateTask, isCreatingTask };
}
