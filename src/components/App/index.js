import '../../App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Welcome from '../Welcome/Index';
import Login from '../Login/Index';
import Signup from '../Signup/Index';
import Footer from '../Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
