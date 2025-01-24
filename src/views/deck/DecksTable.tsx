import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";

function DecksTable() {
  return (
    <Box sx={{ padding: 2 }}>
      <TableContainer component={Paper}>
        <Table>
          {/* Encabezado */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "50%", fontWeight: "bold" }}>
                Nombre
              </TableCell>
              <TableCell sx={{ width: "16.67%", textAlign: "center" }}>
                Cat1
              </TableCell>
              <TableCell sx={{ width: "16.67%", textAlign: "center" }}>
                Cat2
              </TableCell>
              <TableCell sx={{ width: "16.67%", textAlign: "center" }}>
                Cat3
              </TableCell>
            </TableRow>
          </TableHead>
          {/* Cuerpo */}
          <TableBody>
            <TableRow>
              <TableCell>Juan Pérez</TableCell>
              <TableCell align="center">A</TableCell>
              <TableCell align="center">B</TableCell>
              <TableCell align="center">C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>María López</TableCell>
              <TableCell align="center">X</TableCell>
              <TableCell align="center">Y</TableCell>
              <TableCell align="center">Z</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DecksTable;
