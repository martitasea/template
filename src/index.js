import ReactDOM from 'react-dom';
import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Viewer from './views/Viewer';

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline/>
      <Viewer/>
    </ThemeProvider>
  );
};

const target = document.getElementById('app');
if (target) ReactDOM.render(<App/>, target);

export default App;
