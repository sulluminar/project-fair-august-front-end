
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Project from './pages/Project';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <h3>Project Fair</h3>
      <Home/>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/project' element={ <Project />}/>
       
       
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
