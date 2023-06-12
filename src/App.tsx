
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home.component';
import Nav from './components/nav/nav.component';

function App() {
  return (

    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
