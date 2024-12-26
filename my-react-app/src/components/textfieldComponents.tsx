import { TextField } from "@mui/material";

type Props = {
  label: string;
};

export function FreeTextfield({ label }: Props) {
  return (
    <TextField
      className="bg-white rounded"
      label={label}
      variant="filled"
      margin="normal"
    />
  );
}

export function NumberTextfield({ label }: Props) {
  return (
    <TextField
      className="bg-white rounded"
      label={label}
      variant="filled"
      margin="normal"
      type="number"
    />
  );
}
