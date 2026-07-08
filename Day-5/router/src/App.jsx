
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import HelpDesk from './component/HelpDesk'
import ContactUs from './component/ContactUs'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/HelpDesk' element={<HelpDesk/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
    </Routes>
    
    
    </>
  )
}

export default App