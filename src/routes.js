import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClubsScreen from './screens/clubs';
import ClubScreen from './screens/club';
import NotFoundScreen from './screens/notFound';



const Routes = () => (
    <BrowserRouter>
     <Switch>
        <Route exact path='/' component={ClubsScreen}/>
        <Route exact path='/club/:id' component={ClubScreen}/>
        <Route path='*'>
        <NotFoundScreen/> 
        </Route>   
     </Switch>
    </BrowserRouter>
)

export default Routes;