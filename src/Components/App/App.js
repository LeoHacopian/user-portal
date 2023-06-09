import './App.css';
import NavBar from '../NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPortal from '../UserPortal/UserPortal';
import Form from '../Form/Form';
import Canvas from '../Canvas/Canvas';
import CanvasFormIcons from '../Canvas/CanvasFormIcons';
import { useState } from 'react';
import Footer from '../Footer/Footer';

function App() {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<UserPortal />} />
          <Route path='/Debug' element={<Form />} />
          <Route path="/Questionnaires" element={<CanvasFormIcons selectedForm={selectedForm} setSelectedForm={setSelectedForm}/>} />
          <Route path="/Form/:id" element={<Canvas form={selectedForm} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
