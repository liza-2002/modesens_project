import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Gutter from './components/Gutter/Gut';
import BrandSlide from './components/WomenComponent/BrandSlide';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navbar/>  
    <Gutter/>
    <Home/>
    </>
  );
}

export default App;
