import { supabase } from "./supabase";

export async function getTasks() {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  if (error) throw new Error("There is an error in getting tasks");
  return { tasks };
}

export async function createTask(task) {
  const { data, error } = await supabase
    .from("tasks")
    .insert([task])
    .select()
    .single();
  if (error) throw new Error("There is an error in creating tasks");
  return { data };
}

export async function updateTask(newData, id) {
  console.log(id);
  const { data, error } = await supabase
    .from("tasks")
    .update(newData)
    .eq("id", id)
    .select();
  if (error) throw new Error("There is an error in updating tasks");
  return { data };
}

export async function deleteTask(id) {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) throw new Error("There is an error in deleting tasks");
}
