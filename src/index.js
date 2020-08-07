import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'

import { createMuiTheme }  from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fafafa",
      dark: "#000000"
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
