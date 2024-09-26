import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';
import { fetchSpecial } from '../http/special';
import { Context } from '..';
import { Button, Container } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SpecialityList from '../components/SpecialtyList';
import {useParams} from 'react-router-dom'
import {fetchOneFaculty} from "../http/facultyAPI";
import {fetchSpeciality} from "../http/facultyAPI";

const Speciality = observer(() => {
  
  const [ faculties, setFaculties] = useState({info: []})
  const { specialities, univercity_specialties } = useContext(Context);
  const {id} = useParams()
  

useEffect(() => {
  fetchSpeciality()
  .then(data => {
     specialities.setSpecialities(data);
     console.log(data); // Выводим данные в консоль
 });
}, []);


// useEffect(() => {
//   fetchSpeciality()
//   .then(data => {
//     univercity_specialties.setUnivercity_specialties(data);
//      console.log(data); // Выводим данные в консоль
//  });
// }, []);

  useEffect(() => {
    fetchOneFaculty(id)
     .then(data => setFaculties(data))
     
  }, [])

 
    return (
      <Container>
       
  
        <Row className='mt-2 justify-content-center'>
          <Col>
    <SpecialityList facultyId={id}/>
          </Col>
        </Row>
      </Container>
    );
  });
  
  export default Speciality
