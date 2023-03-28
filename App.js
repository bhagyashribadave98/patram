import react from "react"
import Navbar from "./Components/Navbar"
// import CreateAWB from "./CreateAWB";
// import {Profile} from "./Components/Profile";
// import Profile from "./Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
        <Routes>
          {/* <Route path="/CreateAWB" element={<CreateAWB/>}/> */}
          {/* <Route path="/profile" element={<Profile/>}/> */}
          {/* <Route exact path="/">
            </Route> */}
          {/* <Route path="/profile" element={<Profile/>}/> */}

        </Routes>
        </div>
    </BrowserRouter>
  )
}  

export default App