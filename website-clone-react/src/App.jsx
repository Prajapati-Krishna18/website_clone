import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Amway from './pages/amway/Amway';
import HelpCenter from './pages/amway/HelpCenter';
import Nexa from './pages/nexa/Nexa';
import DiscoverNexa from './pages/nexa/DiscoverNexa';
import Bittorrent from './pages/bittorrent/Bittorrent';
import BittorrentHelp from './pages/bittorrent/BittorrentHelp';
import Hotstar from './pages/hotstar/Hotstar';
import HotstarLogin from './pages/hotstar/HotstarLogin';
import Ola from './pages/ola/Ola';
import OlaAbout from './pages/ola/OlaAbout';
import Netflix from './pages/netflix/Netflix';
import NetflixSignIn from './pages/netflix/NetflixSignIn';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"                    element={<Home />} />
        <Route path="/amway"               element={<Amway />} />
        <Route path="/amway/helpcenter"    element={<HelpCenter />} />
        <Route path="/nexa"                element={<Nexa />} />
        <Route path="/nexa/discover"       element={<DiscoverNexa />} />
        <Route path="/bittorrent"          element={<Bittorrent />} />
        <Route path="/bittorrent/help"     element={<BittorrentHelp />} />
        <Route path="/hotstar"             element={<Hotstar />} />
        <Route path="/hotstar/login"       element={<HotstarLogin />} />
        <Route path="/ola"                 element={<Ola />} />
        <Route path="/ola/about"           element={<OlaAbout />} />
        <Route path="/netflix"             element={<Netflix />} />
        <Route path="/netflix/signin"      element={<NetflixSignIn />} />
        <Route path="*"                    element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
