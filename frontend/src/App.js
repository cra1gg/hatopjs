import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/SignIn"
import CreateClass from "./teachers/classes/CreateClass"
import ManageClasses from "./teachers/classes/ManageClasses"
import ViewClasses from "./students/classes/ManageClasses"
import Home from "./components/Home/Home"
import StudentStats from "./components/Info/StudentStats"
import EnrolClass from "./components/Info/EnrolClass"
import QuizBuilder from "./components/QuizBuilder"
import './App.css';
import Navbar from './components/Navigation/Navbar';


class App extends React.Component {
   render() {
      return (
        <div>
          <BrowserRouter>
              <div>
              <Navbar isLogged={false}/>
                  <Switch>
<<<<<<< HEAD
                      <Route path="/signup" component={SignUp}/>
                      <Route path="/signin" component={SignIn}/>
                      <Route path="/createClass" component={CreateClass}/>
                      <Route path="/manageClasses" component={ManageClasses}/>
	              <Route path="/studentstats" component={StudentStats}/>
=======
                      <Route path="/signup" component={SignUp} />
                      <Route path="/signin" component={SignIn} />
                      <Route path="/createClass" component={CreateClass} />
                      <Route path="/manageClasses" component={ManageClasses} />
	                  <Route path="/studentstats" component={StudentStats}/>
                      <Route path="/viewclasses" component={ViewClasses}/> 
>>>>>>> 931733e31ed1f1b808b29a82d60d2decd4a42f75
                      <Route path="/enrolclass" component={EnrolClass}/>
	              <Route path="/quizbuilder" component={QuizBuilder}/>
	              <Route path="" component={Home}/>
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
      );
  }
}


export default App;
