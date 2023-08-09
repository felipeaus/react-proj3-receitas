import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./componentes/pages/home/home";
import { RecDoce } from "./componentes/pages/rec-doce/recdoce";
import { RecSalg } from "./componentes/pages/rec-salgada/recsalgada";
import { RecBeb } from "./componentes/pages/rec-bebida/recbeb";
import { Sobre } from "./componentes/pages/sobre/sobre";
import { DoceReceitas } from "./componentes/pages/receitas/docereceitas";
import { SalgReceitas } from "./componentes/pages/receitas/salgreceitas";
import { BebReceitas } from "./componentes/pages/receitas/bebreceitas";



function App() {
  return (
    <div className="all-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas-doces" element={<DoceReceitas />} />
          <Route path="/receitas-salgada" element={<SalgReceitas />} />
          <Route path="/receitas-bebida" element={<BebReceitas />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/receitas-doces/:id" element={<RecDoce />} />
          <Route path="/receitas-salgadas/:id" element={<RecSalg />} />
          <Route path="/receitas-bebida/:id" element={<RecBeb />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;