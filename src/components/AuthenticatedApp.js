import React, {useState, useEffect } from 'react';
import '../components-styling/App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './Main'
import CourseDetails from './CourseDetails'
import NotFound from './NotFound'
import { Navbar } from "./Navbar";
import CourseContext from '../context/CourseContext'
import UnauthenticatedApp from "./UnauthenticatedApp";


function AuthenticatedApp() {

    const initialState = window.localStorage.getItem('on-going') || ''
    const [courseProgress, setCourseProgress] = useState(initialState)

    useEffect(() => {
        window.localStorage.setItem('courseProgres', courseProgress)
    }, [courseProgress])

  return (
        <CourseContext.Provider value={{courseProgress: courseProgress,
            changeStatus: (courseProgress) => setCourseProgress(courseProgress)
        }}>
            <div className="App">
              <Router>
                  <Switch>
                      <Route exact path="/">
                          <Navbar/>
                          <Main />
                      </Route>
                      <Route path="/details">
                          <Navbar/>
                        <CourseDetails />
                      </Route>
                      <Route path="/login">
                          <UnauthenticatedApp />
                      </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
              </Router>
            </div>
        </CourseContext.Provider>
  );
}

export default AuthenticatedApp;
