import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';


function App() {
  return (
      <BrowserRouter>
      <Header />
      
      <Switch>
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/trangchu" component={Home} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/usestate" component={UseStateDemo} />


        <Route exact path="/" component={Home} />
      </Switch>


        {/* 
        <Route path="/home" render={(propsRoute)=> {

          return <div>
            <h1>Menu</h1>
            <Home />
          </div>

        }} /> */}

      
      
      </BrowserRouter>
  );
}

export default App;
