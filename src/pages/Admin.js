import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateUser from "../components/modals/CreateUser";
import CreateFaculty from "../components/modals/CreateFaculty";

const Admin = () => {
    const [userVisible, setUserVisible] = useState(false);
    const [facultyVisible, setFacultyVisible] = useState(false);
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
                onClick={() => setFacultyVisible(true)}
            >
                Добавить университет
            </Button>           
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)} />
            <CreateFaculty show={facultyVisible} onHide={() => setFacultyVisible(false)} />
        </Container>
    );
};

export default Admin;
