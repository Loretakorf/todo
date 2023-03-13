import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useDelete } from "../hooks/useDelete";
import { useUpdate } from "../hooks/useUpdate";

const TodoCard = ({ title, description, id, onReload, completed,onError, onEdit }) => {
  const { openDialogDelete, closeDeleteDialog, handleDelete, isOpen } =
    useDelete(id, onReload, () => {
      onError(
        `could not update the task by the name of ${title}.`
      )
    });

  const { onComplete, onIncomplete } = useUpdate({
    id,
    title,
    description,
    completed,
    onReload,
    onError,
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography
          fontWeight="bold"
          sx={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "grey" : "black",
            textDecorationThickness: "2px",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" gap={2} alignItems="self-start">
          <Typography>{description}</Typography>
          <Stack direction="row" gap={1}>
            {!completed ? (
              <Button
                variant="contained"
                size="small"
                startIcon={<CheckIcon />}
                onClick={onComplete}
              >
                Complete
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<CloseIcon />}
                onClick={onIncomplete}
              >
                Incomplete
              </Button>
            )}
             <Button
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<EditIcon />}
              onClick={onEdit}
            >
              edit
            </Button>

            <Button
              variant="contained"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={openDialogDelete}
            >
              Delete
            </Button>
          </Stack>

          <Dialog open={isOpen} onClose={closeDeleteDialog}>
            <DialogTitle id="alert-dialog-title" maxWidth="md">
              Are you sure you want to delete '{title}'?
            </DialogTitle>

            <DialogActions>
              <Button
                onClick={closeDeleteDialog}
                size="small"
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                autoFocus
                onClick={handleDelete}
                size="small"
                variant="contained"
                color="error"
              >
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
export default TodoCard;
