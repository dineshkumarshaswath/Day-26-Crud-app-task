import React from 'react'
import Students from './Components/students.jsx'
import './index.css'
import {Switch,Route}  from 'react-router-dom'
import Addstudent from './Components/addstudent.jsx'
import data from './Components/data.js'
import Updatestudents from './Components/updatestudents.jsx';
import {useState} from "react"
import Base from './Components/base.jsx';
import Dashboard from './Components/dashboard.jsx'

function App() {
  const[student,setStudents]=useState(data);
    
  return (
  <div>
    <Switch>

    <Route  exact path="/">
        <Dashboard
      student={student}
      setStudents={setStudents}/>
        </Route>

      <Route  path="/add">
      <Students
      student={student}
      setStudents={setStudents}/>
      </Route> 


     


      <Route path="/addx">
        <Addstudent
         student={student}
         setStudents={setStudents}/>
      </Route>

      <Route path="/edit/:id">
        <Updatestudents
         student={student}
         setStudents={setStudents}/>
      </Route>

      <Route path="/base">
        <Base/>
      </Route>
  

      </Switch>
   
  </div>
  )
}

export default App
