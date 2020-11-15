import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import AddHouse from './Components/Dashboard/AddHouse/AddHouse';
import MyRents from './Components/Dashboard/MyRents/MyRents';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/bookingList">
          <BookingList />
        </Route>
        <Route path="/addHouse">
          <AddHouse />
        </Route>
        <Route path="/myRents">
          <MyRents />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
