import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/global';
import Main from '@pages/Main';
import { neon } from '@theme/neon';

const App = () => (
  <ThemeProvider theme={neon}>
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

export default App;
