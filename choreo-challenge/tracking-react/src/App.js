import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/layouts/Spinner';
import Header from './components/layouts/Header';
import Wrapper from './components/layouts/Wrapper';
import SearchBox from './components/layouts/SearchBox';
import Home from './components/pages/Home';
import Pricing from './components/pages/Pricing';
import Contact from './components/pages/Contact';
import TrackingShipment from './components/pages/TrackingShipment';
import ShipmentDetails from './components/pages/ShipmentDetails';
import SignIn from './components/pages/SignIn';
import NotFound from './components/pages/NotFound';
import Footer from './components/layouts/Footer';
import { useState, Suspense } from 'react';

function App() {
  const [openSearchBox, setOpenSearchBox] = useState(false);

  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Header openSearchBox={openSearchBox} setOpenSearchBox={setOpenSearchBox} />
          <Wrapper>
            {openSearchBox && <SearchBox className='small-box' openSearchBox={openSearchBox} setOpenSearchBox={setOpenSearchBox} />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pricing' element={<Pricing />} />
              <Route path='/contact-sales' element={<Contact />} />
              <Route path='/tracking-shipment' element={<TrackingShipment />} />
              <Route path='/tracking-shipment/:track_num' element={<ShipmentDetails />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='*' exact={true} element={<NotFound />} />
            </Routes>
          </Wrapper>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
