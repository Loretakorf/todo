import { Button, Typography, Box, TextField, Alert } from "@mui/material";
import { postList } from "../servises/postList";
import { useForm } from "react-hook-form";
import { updateTodo } from "./updateTodo";
import { useState } from "react";
//
// onSubmit={async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const todo = {
//     completed: false,
//   };
//   for (let [name, value] of formData.entries()) {
//     todo[name] = value;
//   }
//   await postList(todo);
//   onSubmit?.();
//   onClose?.();
// }}
const TodoForm = ({ onClose, editData }) => {
  const [error, setError] = useState();

  const { register, handleSubmit } = useForm({
    defaultValues: editData || {
      title: "",
      description: "",
      completed: false,
    },
  });

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4">
        {editData ? "Edit Todo" : "Add Todo"}
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            if (editData) {
              await updateTodo(data);
            } else {
              await postList(data);
            }
            setError()
            onClose?.();
          } catch (_) {
            setError("could not save Todo.Please try again");
          }
        })}
      >
        <Box />
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField required {...register("title")} name="title" fullWidth />
          <TextField
            required
            {...register("description")}
            label="Description"
            fullWidth
          />
          <Button variant="contained" type="submit">
            {editData ? "Edit Todo" : "Add Todo"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default TodoForm;
