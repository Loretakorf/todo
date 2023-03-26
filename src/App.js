import { useState } from "react";
import TodoView from "./views/TodoView";
import { LoginView } from "./views/LoginView";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">{user ? <TodoView /> : <LoginView />}</Container>
    </div>
  );
}

export default App;
