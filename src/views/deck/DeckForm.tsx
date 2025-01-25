import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { CreateDeckDto } from "../../core/domain/dto/DeckCreateDto";
import TextInput from "../../shared/TextInput";

interface Props {
  initialValues?: CreateDeckDto;
}

function DeckForm({ initialValues }: Props) {
  const formInitialValues: CreateDeckDto = initialValues ?? {
    title: "",
  };

  const [form, setForm] = useState<CreateDeckDto>(formInitialValues);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(form);
    console.log(JSON.stringify(form));
  }

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4">Create Deck</Typography>

      <Box>
        <TextInput
          label="Título"
          name="title"
          onChange={onChange}
          value={form.title}
        />

        <Button variant="contained" color="primary" type="submit">
          Guardar
        </Button>
      </Box>
    </Box>
  );
}

export default DeckForm;
