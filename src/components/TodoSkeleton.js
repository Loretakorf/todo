import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Skeleton from "@mui/material/Skeleton";
import AccordionDetails from "@mui/material/AccordionDetails";
export const TodoSkeleton = () => {
  return (
    <Accordion expanded={false}>
      <AccordionSummary expandIcon={   <Skeleton variant="circular" width={18} height={18}/>}>
        <Skeleton variant="text" width={300} />
      </AccordionSummary>
      <AccordionDetails></AccordionDetails>
    </Accordion>
  );
};
