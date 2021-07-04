import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import { useController } from "react-hook-form";

export default function TextField({ name, control, ...rest }) {
  const { defaultValue, rules, required } = rest;

  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultValue || "",
  });

  return (
    <MuiTextField
      inputRef={ref}
      {...inputProps}
      {...rest}
      required={required}
      variant="outlined"
    />
  );
}
