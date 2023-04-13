import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Login from "./pages/Login"
import Protect from "./components/Protect"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protect client={localStorage.getItem('client')} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
