import styles from './App.module.css';
import { Routes, Route } from "@solidjs/router"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
    return (
        <>
          <Navbar />
          <Routes>
              <Route exact path='/' component={Home}/>
              {/* <Route exact path='/home'/> */}
          </Routes>
        </>
    );
}

export default App;
