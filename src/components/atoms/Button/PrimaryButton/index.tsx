import React from "react";
import Button from "@mui/material/Button";

export interface ButtonProps {
  label: string | JSX.Element;
  disabled: boolean;
  onClick: () => void;
}

const PrimaryButton = (props: ButtonProps) => {
  const { label, disabled, onClick } = props;
  return (
    <Button
      disabled={disabled}
      color="primary"
      variant="contained"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
