import styles from './App.module.css';
import { Routes, Route } from "@solidjs/router"
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer"
import Home from './pages/Home/Home';
import About from "./pages/About/About"

function App() {
    return (
        <>
          <Navbar />
          <Routes>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
          </Routes>
          <Contact />
          <Footer />
        </>
    );
}

export default App;
