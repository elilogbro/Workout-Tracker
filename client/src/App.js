import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from './Login'
import ExerciseForm from './ExerciseForm'
import RoutineHistory from './RoutineHistory'
import NewUserForm from './NewUserForm'
import Links from './Links'

function App() {

  const history = useHistory();
  const [user, setUser] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

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
    .then(res => res.json())
    .then(user => setUser(user))

    setFormData({
        username: "",
        password: ""
    })

    history.push('/history')
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
              />
          </Route>
          <Route path="/exercise-form">
            <ExerciseForm />
          </Route>
          <Route path="/history">
            <RoutineHistory />
          </Route>
          <Route path="/user-form">
            <NewUserForm
              setUser={setUser}
              />
          </Route>
        </Switch>
      </div>
  );
}

export default App;