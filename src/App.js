import React from "react";
import Covid from "./components/covid";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/covid" index element={<Covid/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App