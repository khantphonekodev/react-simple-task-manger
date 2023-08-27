import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../services/apiTasks";
import { toast } from "react-hot-toast";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate: mutateDeleteTask, isLoading: isDeletingTask } = useMutation({
    mutationFn: deleteTask,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task delete from your list successfully");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { mutateDeleteTask, isDeletingTask };
}
