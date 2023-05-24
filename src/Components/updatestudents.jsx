import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState ,useEffect} from 'react';
import { useHistory , useParams} from 'react-router-dom'
import Base from "./base.jsx"





function Updatestudents({student,setStudents,}){
    const history=useHistory()
    const {id}=useParams()
    
    
    const a=student[id];

    useEffect(()=>
    { 
        setName(a.Name)
        setStandard(a.Standard) 
        setGender(a.Gender)

    },[a,student] )
    
   
    const[name,setName]=useState("");
    const[standard,setStandard]=useState("");
    const[gender,setGender]=useState("");
  
    

    
    function handleupdate(){

       const newupdate={
        Name:name,
        Standard:standard,
        Gender:gender
       } 

       student[id]=newupdate;
       console.log(newupdate);
       setStudents([...student])
       history.push("/")

    

    }
    


    return(
     <div>

        <Base>
 
<div className='input'>

<h3>Update students</h3>
<input type="text" className='value'
value={name}
onChange={(e)=>setName(e.target.value) }/>
<input type="text" className='value'
value={standard} 
onChange={(e)=>setStandard(e.target.value)}/>
<input type="text" className='value'
value={gender}
onChange={(e)=>setGender(e.target.value)}/>



<Button variant="primary" onClick={handleupdate} >update</Button>

</div>

</Base>

     </div>



    )
}

export default Updatestudents;