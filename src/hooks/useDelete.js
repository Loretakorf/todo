import { useState } from "react";
import { deleteList } from "../servises/deleteList";

export const useDelete = (id, onDelete, onError) => {
  const [open, setOpen] = useState(false);

  const openDialogDelete = () => {
    setOpen(true);
  };
  const closeDeleteDialog = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      await deleteList(id);
      onDelete?.();
    } catch (e) {
      onError();
    }
   closeDeleteDialog()
    // if (onDelete) onDelete();
   
  };
  return {
    openDialogDelete,
    closeDeleteDialog,
    handleDelete,
    isOpen: open,
  };
};
