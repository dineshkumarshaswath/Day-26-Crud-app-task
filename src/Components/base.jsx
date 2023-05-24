import React, { Children } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Base({children}){
    return(
      <div >
   
     <Navbar bg="primary"  style={{overflow:'hidden'}}variant="dark">
        <Container className='navbar'>
          <div className='nav1'>
          <Navbar.Brand href="/" style={{color:'aliceblue'}}>StudentApp</Navbar.Brand>
          </div>
          <div className='nav2'>
          <Nav className="me-auto">
            <Nav.Link href="/"  style={{color:'aliceblue'}}>Dashboard</Nav.Link>
            <Nav.Link href="/add"  style={{color:'aliceblue'}}>Addstudent</Nav.Link>
           
          </Nav>
          </div>
          
        </Container>
      </Navbar>
     

   <div>
   {children}
   </div>

   </div>
    )
}

export default Base;