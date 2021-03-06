
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Layout/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import User from './pages/User';
function App() {
  return (
    <Router>
     <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home></Home>}></Route>
        <Route path='/about' exact element={<About></About>}></Route>
        <Route path='/contact' exact element={<Contact></Contact>}></Route>
        <Route path='/users/add' exact element={<AddUser></AddUser>}></Route>
        <Route path='/users/edit/:id' exact element={<EditUser></EditUser>}></Route>
        <Route path='/users/:id' exact element={<User></User>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
       </div>
    </Router>
   
  );
}

export default App;
