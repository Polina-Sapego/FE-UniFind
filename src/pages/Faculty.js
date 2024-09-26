import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import FacultyList from '../components/FacultyList';
import {useParams} from 'react-router-dom'
import {Context} from "../index";
import {fetchOneUniversity} from "../http/facultyAPI";
import {fetchFaculty} from "../http/facultyAPI";

const Faculty = observer(() => {
   const [ university, setUniversities] = useState({info: []})
   const { faculties } = useContext(Context);
   const {id} = useParams()
   

useEffect(() => {
   fetchFaculty()
   .then(data => {
      faculties.setFaculties(data);
      console.log(data); // Выводим данные в консоль
  });
}, []);

   useEffect(() => {
      fetchOneUniversity(id)
      .then(data => setUniversities(data))
      
   }, [])

  
  
console.log(university)
 

    return (
        <Container>
         
 <Col>
    <Image width={1118} height={300} src={'http://localhost:5555/' + university.img}/>

 </Col>
 <Col >
    <div><h1>{university.name}</h1></div>
 </Col>
 <Col >
    <div><h5>{university.number}</h5></div>
 </Col>
 <Col >
    <div><h5>{university.adress}</h5></div>
 </Col>
 <Col>
    <div>{university.coords}</div>
 </Col>
 <Col md={13}>
 <FacultyList facultyId={id}/>
 </Col>
 <Row className="d-flex flex-column m-3">
               
            </Row>
          
        </Container>
        
    );
});

export default Faculty;
