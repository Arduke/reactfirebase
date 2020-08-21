import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={NavBar}/>
            <Route path="/" exact component={DashBoard}/>
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/createproject" component={CreateProject}/>
        </BrowserRouter>
    )
}

export default Routes;