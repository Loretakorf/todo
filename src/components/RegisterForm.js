import React from "react";
import { Box, Button, TextField, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../servises/registerUser";
import { useState } from "react";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <Alert severity="success">Register siccessful! You can now login</Alert>
    );
  }
  return (
    <form
      onSubmit={handleSubmit(async (formdata) => {
        if (formdata.password !== formdata.passwordRepeat) {
          setError("Password must match");
          return;
        }
        try {
          setLoading(true);
          await registerUser({
            email: formdata.email,
            password: formdata.password,
          });
          setError(null);
          setSuccess(true);
        } catch (err) {
          setError("Failed to register user");
        }
        setLoading(false);
      })}
    >
      <Box display="flex" flexDirection="column" gap={3}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField label="Email" {...register("email")} />
        <TextField type="password" label="Password" {...register("password")} />
        <TextField
          type="password"
          label="Password(repeat)"
          {...register("passwordRepeat")}
        />
        <Button variant="contained" type="submit">
          {loading ? "Loading" : "Register"}
        </Button>
      </Box>
    </form>
  );
};
