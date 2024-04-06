import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Text from "./Components/Text";
import { NavLink, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        
      </div>
      <Routes>
        <Route path="/About" element={<About></About>} />
        <Route path="/Home" element={<Text></Text>} />
        <Route path="/" element={<Text></Text>} />
      </Routes>
    </>
  );
}

export default App;
