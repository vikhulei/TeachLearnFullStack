import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/02_header/Header';
import Home from './pages/01_home/Home';
import MyProgress from "./pages/02_myprogress/MyProgress"
import Reading from "./pages/04_reading/Reading"
import Listening from "./pages/05_listening/Listening"
import Speaking from "./pages/06_speaking/Speaking"
import Grammar from "./pages/07_grammar/Grammar"
import Contacts from "./pages/08_contacts/Contacts"
import Footer from './components/03_footer/Footer';


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprogress" element={<MyProgress />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;