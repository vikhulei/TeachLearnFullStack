import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/01_Home/Home';
import MyProgress from "./pages/02_myprogress/MyProgress"
import Header from './components/02_header/Header';
import Footer from './components/03_footer/Footer';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprogress" element={<MyProgress />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;