import React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Addstudent({student,setStudents}){
   
    const[name,setName]=useState("");
    const[standard,setStandard]=useState("");
    const[gender,setGender]=useState("");

    const history= useHistory();
  

    function handleclick(){
        const newstudent={
            Name:name,
            Standard:standard,
            Gender:gender
        };
        
        console.log(newstudent);
        setStudents([...student,newstudent])
    setName("")
    setStandard("")
    setGender("")

    history.push("/")
      
      
    }

    return(
<div className='input'>


    <h3>Addstudents</h3>

    <input type="text" className='value'
    value={name}
    placeholder="Enter student name"
    onChange={(e)=>setName(e.target.value) }/>
   
    <input type="text" className='value'
    value={standard} 
    placeholder="Enter standard"
    onChange={(e)=>setStandard(e.target.value)}/>
    <input type="text"  className='value'
    value={gender}
    placeholder='Enter gender'

    onChange={(e)=>setGender(e.target.value)}/>
    
    <Button onClick={handleclick}>add student</Button>
 
    

    
    
   

</div>


    )
}
export default Addstudent;

