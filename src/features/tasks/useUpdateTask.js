import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../../services/apiTasks";
import { toast } from "react-hot-toast";

export function useUpdateTask() {
  const queryClient = useQueryClient();
  const { mutate: mutateUpdateTask, isLoading: isUpdatingTask } = useMutation({
    mutationFn: ({ data, idToEdit }) => updateTask(data, idToEdit),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added to your list successfully");
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return { mutateUpdateTask, isUpdatingTask };
}
