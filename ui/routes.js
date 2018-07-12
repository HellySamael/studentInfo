import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Student from './containers/Student';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Home}/>
   <Route path='/about' component={About}/>
   <Route path='/student' component={Student}/>
   </Switch>
   </BrowserRouter>
 )
}