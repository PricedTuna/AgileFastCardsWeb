import { Box, Container, Typography } from "@mui/material";
import DecksDisplay from "./deck/DecksTable";

function HomePage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}>
      <Box>
        <Typography variant="h3">Bienvenido</Typography>
      </Box>

      <Container
        sx={{
          backgroundColor: "#f1f1f1", // Fondo gris claro
          padding: "16px",
          borderRadius: "8px",
          marginTop: "16px", // Espacio superior
        }}
      >
        <DecksDisplay />
      </Container>

    </Box>
  );
}

export default HomePage;
