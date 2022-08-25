import Home from './Home';
import NavBar from './NavBar';
import WeatherForm from './WeatherForm';
import OneCall from './OneCall';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='weather'>
            <Route index element={<WeatherForm />} />
            <Route path=':city/:lat/:lon' element={<OneCall />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
