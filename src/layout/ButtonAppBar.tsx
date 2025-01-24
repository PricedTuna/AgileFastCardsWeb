import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fast Agile Cards
          </Typography>
          {/* <Stack direction={"row"} spacing={2}>
            <Button variant="contained" component={Link} to="/profile" color="error" >Perfil</Button>
            <Button variant="contained" component={Link} to="/" color="error" >Home</Button>
          </Stack> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
