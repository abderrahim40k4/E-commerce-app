import { Outlet } from "react-router-dom"
import Home from "./home/Home"
import NavItems from "./components/NavItems"


function App() {

  return (
    <div className="">
      <NavItems/>
      <Outlet/>
    </div>
  )
}

export default App
