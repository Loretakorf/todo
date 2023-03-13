import { Box } from "@mui/system";
import Button from "@mui/material/Button";

const AddNewTodo = ({ onOpen }) => {
  return (
    <Box marginBottom={4}>
      <Button variant="contained" onClick={onOpen}>
        Add New Todo
      </Button>
    </Box>
  );
};
export default AddNewTodo;
