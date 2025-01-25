import { TextField } from "@mui/material";

interface Props {
  name: string;
  label: string;
  value: string | number;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

function TextInput({ onChange: handleOnChange, value, label, name }: Props) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={handleOnChange}
      multiline
      fullWidth
      margin="normal"
      required
    />
  );
}

export default TextInput;
