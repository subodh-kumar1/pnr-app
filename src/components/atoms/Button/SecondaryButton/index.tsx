import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "../PrimaryButton";

const SecondaryButton = (props: ButtonProps) => {
  const { label, disabled, onClick } = props;
  return (
    <Button
      disabled={disabled}
      color="primary"
      variant="outlined"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
