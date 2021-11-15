import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import Detail from './pages/Detail/Detail';
import { Component, Fragment } from 'react';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import AdminPage from './pages/_AdminPage/AdminPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AdminTemplate path="/admin/index" component={AdminPage} />

        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />
        {/* <Route exact path="/home" render={(propsRoute) => {
          return <Fragment>
            <Header />
            <Home {...propsRoute} />
          </Fragment>
        }} /> */}
        {/* <Route exact path="/trangchu" component={Home} /> */}
        {/* <Route exact path="/about" render={(propsRoute) => {

          return <Fragment>
            <Header />
            <About {...propsRoute} />
          </Fragment>
        }} /> */}
        <HomeTemplate exact path="/contact" component={Contact} />
        <UserTemplate exact path="/login" component={Login} />
        <UserTemplate path="/register" component={Register} />
        <HomeTemplate exact path="/usestate" component={UseStateDemo} />
        <HomeTemplate exact path="/useeffect" component={UseEffectDemo} />
        <HomeTemplate exact path="/classapi" component={ClassApi} />
        <HomeTemplate exact path="/funcapi" component={FuncApi} />
        <HomeTemplate exact path="/hookredux" component={DemoFakeBook} />
        <HomeTemplate exact path="/reduxmiddleware" component={ReduxMiddleWare} />
        <HomeTemplate exact path="/formreact" component={FormReact} />

        <HomeTemplate exact path="/detail/:id" component={Detail} />

        {/* <Detail /> */}
        <HomeTemplate exact path="/" component={Home} />
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
