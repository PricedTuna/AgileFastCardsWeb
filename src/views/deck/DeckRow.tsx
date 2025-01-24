import { TableCell, TableRow } from "@mui/material";
import { Deck } from "../../domain/Deck";

interface Props extends Deck { }

function DeckRow({cat1, cat2, cat3, name}: Props) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell align="center">{cat1}</TableCell>
      <TableCell align="center">{cat2}</TableCell>
      <TableCell align="center">{cat3}</TableCell>
    </TableRow>
  );
}

export default DeckRow;
