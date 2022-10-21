import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "../PrimaryButton";

const ActionButton = (props: ButtonProps) => {
  const { label, disabled, onClick } = props;
  return (
    <Button
      disabled={disabled}
      color="secondary"
      variant="text"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
