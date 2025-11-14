import {Routes, Route} from "react-router-dom"

import Mainlayout from "./layouts/Mainlayout"
import HomePage from "./pages/HomePage"
function App() {

  return (
    <>
    <Routes>
      <Route element={<Mainlayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>

    </Routes>
      
    </>
  )
}

export default App
