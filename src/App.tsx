import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from "@mui/material/styles";
import theme from './core/config/theme';
import { CssBaseline } from '@mui/material';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
