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


function App() {
  return (
    <div>
      <HeaderComponent/>
      <BrowserRouter>
         <Routes>
          <Route path="/HomePage" exact element={<HomePage/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/users" element={<ListUsers/>}/>
          <Route path="/add-user" element={<CreateUserComponent/>}/>
          <Route path="/map" element={<GoogleApiWrapper/>}/>
          <Route path="/Attendence" exact element={<Attendence/>}/>
         </Routes>
      </BrowserRouter>
      <FooterComponents/>
    </div>
  );
}

export default App;
