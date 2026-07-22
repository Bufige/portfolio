import { HashRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '@styles/global';
import Main from '@pages/Main';
import Header from '@components/Header';
import Footer from '@components/Footer';
import FollowMe from '@components/FollowMe';

const App = () => (
  <HashRouter>
    <GlobalStyle />
    <Header />
    <FollowMe />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    <Footer />
  </HashRouter>
);

export default App;
