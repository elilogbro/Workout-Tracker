import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import Login from './Login'
import SignUp from './SignUp'
import Links from './Links'
import ExerciseForm from "./ExerciseForm";
import RoutineHistory from "./RoutineHistory";
import ExercisesContainer from "./ExercisesContainer";
import ExercisesList from "./ExercisesList";
import {
  Container
} from '../styles/AppStyles';

function App() {

  const { user } = useContext(UserContext);

  return (
    <div>
      <Links />
      <Container>
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
            <Route path={user && `/user/${user.id}`}>
              <RoutineHistory />
            </Route>
            <Route path="/routines/:id">
              <ExercisesContainer />
            </Route>
            <Route path="/exercises">
              <ExercisesList />
            </Route>
          </Switch>
      </Container>
    </div>
  );
}

export default App;