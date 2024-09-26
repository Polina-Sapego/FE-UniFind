import React, { useContext, useState } from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Context } from "../../index";
import { createSpecialization } from "../../http/facultyAPI";

const CreateSpecialization = ({show, onHide}) => {
    
    const [name, setName] = useState('');
    const [code, setCode] = useState(0);
    const [description, setDescription] = useState('');

    const addFaculty = () => {
        const universityData = {
            name,
            code,
            description
        };

        createSpecialization(universityData)
        .then(data => {
            console.log('University created:', data); // Для отладки, чтобы увидеть ответ сервера
            onHide();
        })
        .catch(error => {
            console.error('Error creating university:', error.response || error.message || error);
        });
};

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить специальность
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                         value={name}
                         onChange={e => setName(e.target.value)}
                        placeholder={"Введите название специальности"}
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                         value={code}
                        onChange={e => setCode(e.target.value)}
                        placeholder={"Введите баллы на специальность"}
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите описание специальности"}
                        style={{ marginBottom: '15px' }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addFaculty}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
        ;
};

export default CreateSpecialization;
