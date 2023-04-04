import react from "react"
import * as ReactDOM from 'react-dom';
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Profile} from "./Components/Profile.jsx";
import Print from "./Components/Print";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
        <Routes>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/Print' element={<Print />}></Route>

        </Routes>
        </div>
    </BrowserRouter>
  );
 
}  

export default App;