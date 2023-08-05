import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import { Home } from "./componentes/pages/home/home";
import { Receitas } from "./componentes/pages/receitas/receitas";


function App() {
  return (
    <div className="all-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas-doces" element={<Receitas />} />
          <Route path="/receitas-salgada" element={<Receitas />} />
          <Route path="/receitas-bebida" element={<Receitas />} />
          <Route path="/sobre" element={<Receitas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;