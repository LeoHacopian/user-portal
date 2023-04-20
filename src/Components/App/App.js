import './App.css';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPortal from '../UserPortal/UserPortal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
