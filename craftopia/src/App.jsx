import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import $ from 'jquery';
import Navbar from './component/Navbar';
import Member from './pages/Member';
import Qa from './pages/Qa';
import Try from './pages/try';



function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/qa' element={<Qa />}></Route>
        <Route path='/try' element={<Try />}></Route>
      </Routes>

      {/* <section className='indexBanner'>
        <div className="banner-mask"></div>
      </section>


      <div className="content">

        <img src="./images/blob-1.svg" alt="" className='blob-1' />
        <img src="./images/blob-2.svg" alt="" className='blob-2' />
        <img src="./images/blob-3.svg" alt="" className='blob-3' />
      </div> */}

    </div>
  )
}

export default App
