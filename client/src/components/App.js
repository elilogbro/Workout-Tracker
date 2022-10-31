import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
import Links from './Links'
import ExerciseForm from "./ExerciseForm";

function App() {

  return (
      <div className="App">
        <Links />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/user-form">
            <SignUp />
          </Route>
          <Route path="/exercise-form">
            <ExerciseForm />
          </Route>
        </Switch>
      </div>
  );
}

export default App;