import react from "react"
import * as ReactDOM from 'react-dom';
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Profile} from "./Components/Profile.jsx";
import Print from "./Components/Print";


function App() {
  // return (
  //   <BrowserRouter>
  //   <div>
  //     <Navbar />
  //       <Routes>
  //       <Route path='/profile' component={<Profile />}></Route>
  //       <Route path='/Print' component={<Print />}></Route>

  //       </Routes>
  //       </div>
  //   </BrowserRouter>
  // );

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <App /> 
      break

    case "/":
      Component = <Print /> 
      break

    case "/":
      Component = <Profile /> 
      break  
  }

  return (
    <>
      <Navbar />
      {Component}
    </>
  )
 
}  

export default App;