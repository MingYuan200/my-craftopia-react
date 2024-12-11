import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Member from './pages/Member';



function App() {


  return (
    <div>
      <Navbar />
      
      <hr />
      <Routes>
        <Route path='/member' element={<Member />}></Route>
      </Routes>
    </div>
  )
}

export default App
