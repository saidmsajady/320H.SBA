import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Navbar from './components/NavBar';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
