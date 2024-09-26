import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateUser from "../components/modals/CreateUser";
import CreateUniversity from "../components/modals/CreateUniversity";
import CreateFaculty from "../components/modals/CreateFaculty";
import CreateSpecialization from "../components/modals/CreateSpecialization"

const Admin = () => {
    const [userVisible, setUserVisible] = useState(false);
    const [UniversityVisible, setUniversityVisible] = useState(false);
    const [facultyVisible, setFacultyVisible] = useState(false)
    const [SpecializationVisible, setSpecializationVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setUserVisible(true)}
            >
                Добавить пользователя
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setUniversityVisible(true)}
            >
                Добавить университет
                
            </Button>   
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setFacultyVisible(true)}
            >
                Добавить факультет
                
            </Button> 
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setSpecializationVisible(true)}
            >
                Добавить специальность
                
            </Button>         
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)} />
            <CreateUniversity show={UniversityVisible} onHide={() => setUniversityVisible(false)} />
            <CreateFaculty show={facultyVisible} onHide={() => setFacultyVisible(false)} />
            <CreateSpecialization show={SpecializationVisible} onHide={() => setSpecializationVisible(false)} />
        </Container>
        
    );
};

export default Admin;
