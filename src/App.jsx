import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
  <>
    <Navbar/>
    {/*Home/>*/}
    {/*<Register/>*/}
    <Login/>
    <Footer/>
  </>
  );
};

export default App;
  