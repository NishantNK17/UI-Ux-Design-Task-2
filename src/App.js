import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import ProductCard from './pages/ProductCard';
function App() {
  return (
    <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<ProductCard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
