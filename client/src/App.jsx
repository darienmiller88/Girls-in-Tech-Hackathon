import styles from './App.module.css';
import { Routes, Route } from "@solidjs/router"
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <>
          <Navbar />
          <Routes>
              <Route exact path='/'/>
              <Route exact path='/home'/>
          </Routes>
        </>
    );
}

export default App;
