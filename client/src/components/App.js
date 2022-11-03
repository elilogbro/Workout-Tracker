import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
import Links from './Links'
import ExerciseForm from "./ExerciseForm";
import RoutineHistory from "./RoutineHistory";
import ExercisesContainer from "./ExercisesContainer";
import ExercisesList from "./ExercisesList";
import ExerciseDetails from "./ExerciseDetails";

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
          <Route path="/user/:id">
            <RoutineHistory />
          </Route>
          <Route path="/routines/:id">
            <ExercisesContainer />
          </Route>
          <Route path="/exercises">
            <ExercisesList />
          </Route>
          <Route path="/exercise/:id">
            <ExerciseDetails />
          </Route>
        </Switch>
      </div>
  );
}

export default App;