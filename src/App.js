import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Error } from './pages/Error';
import SingleRoom from "./pages/SingleRoom";
import { Rooms } from "./pages/Rooms";
import { Route, Switch } from "react-router-dom";
import Navbar from './../src/components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/:kings" component={SingleRoom} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
