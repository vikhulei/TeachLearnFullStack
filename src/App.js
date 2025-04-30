import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import ScrollToTop from './components/01_config/ScrollToTop';
import Header from './components/02_header/Header';
import Home from './pages/01_home/Home';
import MyProgress from "./pages/02_myprogress/MyProgress"
import Lesson from './pages/02_myprogress/03_lessonPage/Lesson';
import Vocabulary from './pages/03_vocabulary/Vocabulary';
import Grammar from "./pages/04_grammar/Grammar"
import Reading from "./pages/05_reading/Reading"
import Listening from "./pages/06_listening/Listening"
import Speaking from "./pages/07_speaking/Speaking"
import Contacts from "./pages/08_contacts/Contacts"
import Footer from './components/03_footer/Footer';


const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprogress">
            <Route path="" element={<MyProgress />} />
            <Route path="lesson" element={<Lesson />} />
          </Route>
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;