import React from "react";
import { Heading } from "../components/Heading";
import { Box, Button, TextField, Divider, Alert } from "@mui/material";
import { RegisterForm } from "../components/RegisterForm";
import { useForm } from "react-hook-form";
import { loginUser } from "../servises/loginUser";
import { useState } from "react";

export const LoginView = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Heading title="Login or Register" />
      <form
        onSubmit={handleSubmit(async (data) => {
          setLoading(true);
          try {
            const res = await loginUser(data);
            onLogin(res.token);
            setError(null);
          } catch (err) {
            setError("Failed to login user");
          }
          setLoading(false);
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField label="Email" {...register("email")} />
          <TextField label="Password" {...register("password")} />
          <Button variant="contained" type="submit">
            {loading ? "Loading" : "Login"}
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 6 }} />
      <RegisterForm />
    </>
  );
};
