import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/01_Home/Home';
import Header from './components/02_header/Header';
// import Header from './components/Header';
// import Dashbord from './pages/Dashbord';
// import Login from './pages/Login';
// import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <Router>
        <div className='container'>
          <Header />
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path='/' element={<Dashbord/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} /> */}
        </Routes>
<ToastContainer />
        </div>
      </Router>
    </div>
  );
}

export default App;
