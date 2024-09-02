import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BcraData } from "./BcraData"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const App = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <h1 align="center">BCRA - Principales Variables</h1>
        <BcraData />
      </CssBaseline>
    </ThemeProvider>
  )
}