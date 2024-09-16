import { Outlet } from "react-router-dom"
import Home from "./home/Home"
import NavItems from "./components/NavItems"
import Footer from "./components/Footer"


function App() {

  return (
    <div className="">
      <NavItems/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
