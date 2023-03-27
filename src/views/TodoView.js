import AddNewTodo from "../components/AddNewTodo";
import { Heading } from "../components/Heading";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";
import { useList } from "../hooks/useList";
import { useModal } from "../hooks/useModal";
import { TodoSkeleton } from "../components/TodoSkeleton";
import { Fragment } from "react";
import { TodoModal } from "../components/TodoModal";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import  Button  from "@mui/material/Button";
console.log(process.env.REACT_APP_API_URL);

function TodoView({onLogout}) {
  const { list, reloadData, loading, error: loadingError } = useList();
  const { open, onOpen, onClose } = useModal();
  const [editData, setEditData] = useState(null);
  const [listErrors, setListErrors] = useState([]);

  const addListError = (errorMessage) => {
    setListErrors([...listErrors, errorMessage]);
  };

  useEffect(() => {
    if (!listErrors.length) {
      return;
    }
    const clearFirstError = () => {
      setListErrors((currentListError) => currentListError.slice(1));
      //setState((currentState) => {return [...currentState, your update here]})
    };
    setTimeout(clearFirstError, 10 * 1000);
  }, [listErrors]);
  return (
    <>
      <Heading title="Todo List"/>
      <Button variant="text" size="cm" color="error" onClick={onLogout}>LOgout</Button>
      <AddNewTodo onOpen={onOpen} />

      <TodoModal
        open={open}
        onClose={() => {
          onClose();
          setEditData(null);
        }}
      >
        <TodoForm
          onClose={() => {
            onClose();
            reloadData();
            setEditData(null);
          }}
          editData={editData}
        />
      </TodoModal>

      {loadingError && (
        <Box marginBottom={2}>
          <Alert severity="error">{loadingError}</Alert>
        </Box>
      )}
      {listErrors.length > 0 &&
        listErrors.slice(-3).map((errorMessage, i) => (
          <Box marginBottom={2} key={errorMessage + i}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        ))}

      {loading ? (
        <Fragment>
          <TodoSkeleton />
          <TodoSkeleton />
          <TodoSkeleton />
        </Fragment>
      ) : (
        list.map((item) => (
          <TodoCard
            key={item._id}
            id={item._id}
            title={item.title}
            completed={item.completed}
            description={item.description}
            onReload={reloadData}
            onEdit={() => {
              onOpen();
              setEditData(item);
            }}
            onError={addListError}
          />
        ))
      )}
    </>
  );
}

export default TodoView;
