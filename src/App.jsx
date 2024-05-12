import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Signin' element={<Signin />}/>
    <Route path='/Signout' element={<Signout />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Profile' element={<Profile />}/>
  </Routes>
  </BrowserRouter>;
}
