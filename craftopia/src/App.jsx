import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Member from './pages/Member';
import Qa from './pages/Qa';



function App() {


  return (
    <div>
      <Navbar />
      
      <hr />
      <Routes>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/qa' element={<Qa/>}></Route>
      </Routes>
    </div>
  )
}

export default App
