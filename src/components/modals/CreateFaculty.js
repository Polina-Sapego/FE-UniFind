import React, { useContext, useState } from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Context } from "../../index";
import { createFaculty } from "../../http/facultyAPI";

const CreateFaculty = ({show, onHide}) => {
    const {faculties} = useContext(Context);
    const [name, setName] = useState('');
    const [universities_id, setUniversities_id] = useState(0);
 

    const addFaculty = () => {
        const universityData = {
            name,
            universities_id,
        };

        createFaculty(universityData)
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
                    Добавить факультет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        // value={value}
                        // onChange={e => setValue(e.target.value)}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название факультета"}
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                        // value={value}
                        // onChange={e => setValue(e.target.value)}
                        value={universities_id}
                        onChange={e => setUniversities_id(e.target.value)}
                        placeholder={"Введите номер университета"}
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

export default CreateFaculty