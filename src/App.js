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
import UseEffectDemo from './pages/Hooks/UseEffectDemo/UseEffectDemo';
import ClassApi from './pages/ApiDemo/ClassApi';
import FuncApi from './pages/ApiDemo/FuncApi';
import DemoFakeBook from './pages/Hooks/HookRedux/DemoFakeBook';
import ReduxMiddleWare from './pages/ApiDemo/ReduxMiddleWare';
import FormReact from './pages/FormReact/FormReact';


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
        <Route exact path="/useeffect" component={UseEffectDemo} />

        <Route exact path="/classapi" component={ClassApi} />

        <Route exact path="/funcapi" component={FuncApi} />
        
        <Route exact path="/hookredux" component={DemoFakeBook} />
        <Route exact path="/reduxmiddleware" component={ReduxMiddleWare} />
        <Route exact path="/formreact" component={FormReact} />


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
