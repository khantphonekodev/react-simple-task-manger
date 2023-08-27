import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/TextArea";
import { useForm } from "react-hook-form";
import { useCreateTask } from "./useCreateTask";
import Button from "../../ui/Button";
import { useUpdateTask } from "./useUpdateTask";

import { Heading } from "../../ui/Heading";

// eslint-disable-next-line react/prop-types
function CreateTaskForm({ task = {}, onCloseModal }) {
  const { id: idToEdit, ...restTaskData } = task;
  const editingSession = Boolean(idToEdit);
  console.log(editingSession);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editingSession ? task : {} });

  const { mutateCreateTask, isCreatingTask } = useCreateTask();
  const { mutateUpdateTask, isUpdatingTask } = useUpdateTask();

  function onSubmit(data) {
    console.log(idToEdit);
    if (editingSession) {
      mutateUpdateTask(
        { data, idToEdit },
        {
          onSuccess() {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      mutateCreateTask(data, {
        onSuccess() {
          reset();
          onCloseModal?.();
        },
      });
    }
  }
  return (
    <div>
      <Heading as="h3">Create New Task</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: "name field is required",
            })}
          />
        </FormRow>
        <FormRow label="description" error={errors?.description?.message}>
          <Textarea
            type="teextarea"
            id="description"
            name="description"
            {...register("description", {
              required: "description field is required",
            })}
          />
        </FormRow>

        <Button disabled={isCreatingTask || isUpdatingTask} type="primary">
          {editingSession ? "Update" : "Add"}
        </Button>
      </form>
    </div>
  );
}

export default CreateTaskForm;
