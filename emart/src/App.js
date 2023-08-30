import logo from './logo.svg';
import './App.css';
import Women from './pages/Women';
import Home from './pages/Home';
import Kid from './pages/Kid';
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Nav/Navbar";
import Beauty from './pages/Beauty';
import Mod from './pages/Mod';
import Men from './pages/Men'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/modesens" element={<Mod />} />
        {/*<Route path="/products/:id" element={<SingleProduct />}></Route>
         <Route path="/women/:id" element={<SingleProduct />}></Route>*/}
        <Route path="/men" element={<Men />}/>
        <Route path="/kid" element={<Kid />} /> 
        <Route path="/women" element={<Women />} />
        <Route path="/beauty" element={<Beauty />} />
       {/*} <Route path="/whymodsens" element={<WhyModesensPage />}></Route>
        <Route path="/community" element={<Community />} />
        <Route path="/design" element={<Design />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
