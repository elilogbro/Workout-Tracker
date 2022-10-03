import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login'
import ExerciseForm from './ExerciseForm'
import RoutineHistory from './RoutineHistory'
import NewUserForm from './NewUserForm'
import Links from './Links'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Links />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/exercise-form">
            <ExerciseForm />
          </Route>
          <Route path="/history">
            <RoutineHistory />
          </Route>
          <Route path="/user-form">
            <NewUserForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;