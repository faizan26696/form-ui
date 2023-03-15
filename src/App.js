import "./styles.css";
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom

export default function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
      {/* <Signup/> */}
      <Login/>
    </div>
  );
}
