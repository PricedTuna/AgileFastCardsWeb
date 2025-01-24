import { TableCell, TableRow } from "@mui/material";

interface Props {
  name: string;
  cat1: string;
  cat2: string;
  cat3: string;
}

function Deck({cat1, cat2, cat3, name}: Props) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell align="center">{cat1}</TableCell>
      <TableCell align="center">{cat2}</TableCell>
      <TableCell align="center">{cat3}</TableCell>
    </TableRow>
  );
}

export default Deck;
