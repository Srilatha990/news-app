import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ALL from './components/all';
import Business from './components/business';
import Entertainment from './components/entertain';
import Health from './components/Health';
import Science from './components/science';
import Sports from './components/sports';
import Technology from './components/tech';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';


function App() {
  const handleLogout = () => {
    localStorage.removeItem ('loggedin');
    
  };
  return (
    <div>
      <BrowserRouter>
      <header className='d-flex justify-content-between h-25 p-3 m-3'>
        <Link to='/'><img src='../news-logo.jpg' style={{width:'70px'}}/></Link>
        <div className='mt-3'>
          <Link className='text-dark text-decoration-none ms-5' to='/all'>All</Link>
          <Link className='text-dark text-decoration-none ms-5' to='/business'>Business</Link>
          <Link className='text-dark text-decoration-none ms-5' to='/entertain'>Entertainment</Link>
          <Link className='text-dark text-decoration-none ms-5' to='/Health'>Health</Link>
          <Link className='text-dark text-decoration-none ms-5' to='/science'>Science</Link>
          <Link className='text-dark text-decoration-none ms-5' to='/sports'>Sports</Link>
          <Link className='text-dark text-decoration-none ms-5n' to='/tech'>Technology</Link>
        </div>
        <Link to='/register'><button className='btn btn-info m-2'>Register</button></Link>
        <Link to='register'><button onClick={handleLogout} className='btn btn-info m-2'>Logout</button></Link>
        
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/all' element={<ALL/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/entertain' element={<Entertainment/>}/>
          <Route path='/Health' element={<Health/>}/>
          <Route path='/science' element={<Science/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/tech' element={<Technology/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
      </section>


      </BrowserRouter>
    </div>
  );
}

export default App;
