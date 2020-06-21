import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './container/login';
import SignUp from './container/signup';
import Home from './container/home';
import Create from './container/create'
import NewsDetails from "./container/newsDetail";
import PrivateRoutes from "./container/PrivateRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Router>
        <div>
        </div>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoutes path="/create">
            <Create />
          </PrivateRoutes>
          <PrivateRoutes path="/update/:id">
            <Create />
          </PrivateRoutes>
          <PrivateRoutes path="/newsDetail/:id">
            <NewsDetails />
          </PrivateRoutes>
          <PrivateRoutes excat={true} path="/newsListing">
            <Home />
          </PrivateRoutes>
          <Route excat={true} path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      <ToastContainer 
      autoClose={1000}
      position="bottom-right"
      />
    </>
  );
}

export default App;
