import {Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import {CountriesList} from './components/CountriesList'
import { CountryDetails } from './components/CoutryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
      <CountriesList/>
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
