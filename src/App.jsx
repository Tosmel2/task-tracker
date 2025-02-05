import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Landing/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
