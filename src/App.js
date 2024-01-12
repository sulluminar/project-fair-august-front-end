
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Project from './pages/Project';
import Register from './pages/Register';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={ <Auth />}/>
        <Route path='/register' element={<Auth register={"register"} />}/>
        <Route path='/project' element={ <Project />}/> 
        <Route path='/dashboard' element={ <Dashboard/>}/> 
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
