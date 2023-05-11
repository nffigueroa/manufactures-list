import './App.css';
import { ManufacturersProvider } from './context/manufacturers';
import { DetailsPage, HomePage } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ManufacturersProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details' element={<DetailsPage />} />
        </Routes>
      </ManufacturersProvider>
    </Router>
  );
}

export default App;
