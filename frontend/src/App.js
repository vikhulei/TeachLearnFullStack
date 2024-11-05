import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/01_Home/Home';
import Header from './components/02_header/Header';
import Footer from './components/03_footer/Footer';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

{/* <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/' element={<Dashbord/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
  </Routes>
<ToastContainer />
</Router> */}