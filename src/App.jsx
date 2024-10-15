import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Users from './pages/Users'
import CounterPage from './pages/CounterPage'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='users' element={<Users />} />
    <Route path="/contact" element={<Contact />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/*" element={<Error /> } />
    <Route path="/counter" element={<CounterPage />} />

   </Routes>
   </BrowserRouter>
  )
}

export default App
