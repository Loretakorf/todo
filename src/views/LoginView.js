import React from "react";
import { Heading } from "../components/Heading";
import { Box, Button, TextField, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../servises/registerUser";

export const LoginView = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Heading title="Login or Register" />
      <form>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Email" />
          <TextField label="Password" />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 6 }} />
      <form
        onSubmit={handleSubmit((formdata) => {
          if (formdata.password !== formdata.passwordRepeat) {
            return;
          }
          registerUser({
            email: formdata.email,
            password: formdata.password,
          }).then(console.log);
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Email" {...register("email")} />
          <TextField label="Password" {...register("password")} />
          <TextField label="Password(repeat)" {...register("passwordRepeat")} />
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </>
  );
};
