import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./components/Register"
import Pass from "./components/Pass"


function App() {

  return (
    <div className="App">
  
  <BrowserRouter>
  
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='registro' element={<Register />}/>
        <Route  path='pass' element={<Pass />}/>
      </Routes>
    
    </BrowserRouter>

    </div>
  )
}

export default App
