import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavTab from "./pages/NavTab";

function App() {
  return (
    <BrowserRouter>
      <NavTab/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      </Routes>
     
  </BrowserRouter>
  );
}

export default App;
