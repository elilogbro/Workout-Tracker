import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from './Login'
import NewUserForm from './NewUserForm'
import Links from './Links'

function App() {

  const [user, setUser] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors] = useState()

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