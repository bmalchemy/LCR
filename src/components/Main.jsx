import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import Newsletter from './Newsletter';
import Calendar from './Calendar';
import PrayerShawl from './PrayerShawl';
import ContactUs from './ContactUs';
import About from './About';
import KeepUp from './KeepUp';
import Connect from './Connect';
import Pastor from './Pastor';

export default function Main() {
  return (
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/about/pastor' component={Pastor}/>
    <Route path='/keepup' component={KeepUp}/>}
    <Route path='/connect' component={Connect}/>}
    <Route path='/newsletter' component={Newsletter}/>
    <Route path='/calendar' component={Calendar}/>
    <Route path='/prayershawl' component={PrayerShawl}/>
    <Route path='/contactus' component={ContactUs}/>
  </Switch>
  );
}
