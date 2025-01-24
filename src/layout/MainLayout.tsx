import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import ButtonAppBar from "./ButtonAppBar";

function MainLayout() {
  return (
    <Box>
      <ButtonAppBar />

      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}

export default MainLayout;
