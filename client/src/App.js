import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import ExerciseForm from './ExerciseForm'
import RoutineHistory from './RoutineHistory'
import NewUserForm from './NewUserForm'
import Links from './Links'
import ExerciseList from './ExerciseList'

function App() {

  const [user, setUser] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [exercises, setExercises] = useState([])
  const [userRoutines, setUserRoutines] = useState(null)
  const [errors, setErrors] = useState([])
  const [userSets, setUserSets] = useState([])
  const [userExercises, setUserExercises] = useState([])

    useEffect(() => {
        fetch('/exercises')
        .then(res => res.json())
        .then(exercises => setExercises(exercises))
    }, [])

  const handleFormChange = (e) => {
      const key = e.target.name
      const value = e.target.value

      setFormData({
          ...formData, [key] : value
      })

  }

  const handleLogin = (e) => {
    e.preventDefault()

    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok) {
          res.json().then(user => {
            setUser(user)
            setUserRoutines(user.ordered_routines)
            setUserSets(user.exercise_sets)
            setUserExercises(user.unique_exercises)
          })
      }
      else {
        res.json().then(json => setErrors(json.error))
      }
    })

    setFormData({
        username: "",
        password: ""
    })
  }

  const handleNewExercise = (exercise) => {
    setExercises([...exercises, exercise])
  }

  const handleDeletedRoutine = (routineId) => {
    const filterRoutines = userRoutines.filter(routine => routine.id !== routineId)
    setUserRoutines(filterRoutines)
  }

  return (
      <div className="App">
        <Links
          user={user}
          setUser={setUser}
          />
        <Switch>
          <Route exact path="/">
            <Login
              handleLogin={handleLogin}
              handleFormChange={handleFormChange}
              formData={formData}
              setFormData={setFormData}
              user={user}
              setErrors={setErrors}
              errors={errors}
              />
          </Route>
          <Route path="/exercise-form">
            <ExerciseForm
            handleNewExercise={handleNewExercise}
            />
          </Route>
          <Route path="/history">
            <RoutineHistory
              userRoutines={userRoutines}
              handleDeletedRoutine={handleDeletedRoutine}
              setUserRoutines={setUserRoutines}
              user={user}
              userSets={userSets}
              userExercises={userExercises}
              setUserExercises={setUserExercises}
              />
          </Route>
          <Route path="/user-form">
            <NewUserForm
                setUser={setUser}
              />
          </Route>
          <Route path="/new-routine">
            <ExerciseList
              exercises={exercises}
              setExercises={setExercises}
            />
          </Route>
        </Switch>
      </div>
  );
}

export default App;