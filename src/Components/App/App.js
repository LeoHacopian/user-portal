import './App.css';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPortal from '../UserPortal/UserPortal';
import Form from '../Form/Form';
import Canvas from '../Canvas/Canvas';
import CanvasFormIcons from '../Canvas/CanvasFormIcons';
import { useState } from 'react';

function App() {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserPortal />} />
          <Route path='/Admin' element={<UserPortal />} />
          <Route path='/People' element={<Form />} />
          <Route path="/LearnMore" element={<CanvasFormIcons selectedForm={selectedForm} setSelectedForm={setSelectedForm}/>} />
          <Route path="/Form/:id" element={<Canvas form={selectedForm} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
