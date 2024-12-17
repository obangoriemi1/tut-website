import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Courses } from "./pages/Courses"
import { About } from "./pages/About"
import { Dashboard } from "./pages/Dashboard"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"

function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="courses" element={<Courses/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="sign-up" element={<Signup/>}></Route>
      <Route path="sign-in" element={<Signin/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
