import React,  {useContext, useEffect} from 'react';
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
//import { useNavigate } from 'react-router-dom';
import FacultyItem from './FacultyItem';

const FacultyList = ({facultyId}) => {

    const {faculties} = useContext(Context);
    
     faculties.faculties.map(fac => console.log(fac))

const filteredFaculties = faculties.faculties.filter(faculty => parseInt(faculty.universities_id) === parseInt(facultyId));

console.log(filteredFaculties);
    return (
        <Row className="d-flex">
            {filteredFaculties.map(faculty => (
                <FacultyItem key={faculty.id} faculties={faculty} />
            ))}
        </Row>
    );
};


export default FacultyList;