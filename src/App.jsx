import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Singin from './Pages/Signin'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<Singin/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App