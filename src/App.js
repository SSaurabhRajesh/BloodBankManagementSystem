import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import ListUsers from './components/ListUsers';
import CreateUserComponent from './components/CreateUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import GoogleApiWrapper from './components/Map';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import Attendence from './components/Attendence';
import User from './components/User';
import Login from './components/Login';
import BloodAvailability from './components/BloodAvailability';
import Certificate from './components/Certificate';


function App() {
  return (
    <div>
      <HeaderComponent/>
      <BrowserRouter>
         <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/users" exact element={<ListUsers/>}/>
          <Route path="/CreateUserComponent" exact element={<CreateUserComponent/>}/>
          <Route path="/map" exact element={<GoogleApiWrapper/>}/>
          <Route path="/Attendence" exact element={<Attendence/>}/>
          <Route path="/user/:id" exact element={<User/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/BloodAvailability" exact element={<BloodAvailability/>}/>
          <Route path="/Certificate" exact element={<Certificate/>}/>
         </Routes>
      </BrowserRouter>
      <FooterComponents/>
    </div>
  );
}

export default App;
