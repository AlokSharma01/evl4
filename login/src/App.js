
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/login';
import { Nav } from './components/Nav';
import { Users } from './components/Users';
import {Posts} from "./components/Posts"
import { Create } from './components/Create';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/" element={<Create/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/Posts" element={<Posts/>} />
      </Routes>
    </div>
  );
}

export default App;
