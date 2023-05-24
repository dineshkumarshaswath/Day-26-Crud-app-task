import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Base from "./base.jsx"
import Addstudent from "./addstudent.jsx"




function Students({ student, setStudents }) {


  const history = useHistory()



  function deletestudent(id) {

    const newaddstudent = student.filter((studen, idx) => idx !== id);
    console.log(newaddstudent);
    setStudents([...newaddstudent])
  }



  return (
    <div>
      
      <Base
      >

      <Addstudent
      student={student}
      setStudents={setStudents}/>

      <div >

        <Container className="container">

          <Row   xs={1} sm={1} md={2} lg={3} className="row">

            {student.map((stud, id) => (

              <Col>
                <Card style={{ width: '18rem' }} key={id} className='cards'>

                  <Card.Body>
                    <Card.Title>Students List</Card.Title>
                    <Card.Text>{stud.Name} </Card.Text>
                    <Card.Text>{stud.Standard} </Card.Text>
                    <Card.Text>{stud.Gender} </Card.Text>
                    <Button variant="primary" onClick={() => history.push(`/edit/${id}`)} >Edit</Button><hr />
                    <Button variant="danger" onClick={() => deletestudent(id)}>delete</Button>
                  </Card.Body>
                </Card>

              </Col>



            ))

            }


          </Row>
        </Container>
      </div>



   </Base>

    </div>
  )
}
export default Students;