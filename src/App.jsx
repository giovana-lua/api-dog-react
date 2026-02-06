import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Dogs";
import Resultados from "./page/resultado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultado/:busca" element={<Resultados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
