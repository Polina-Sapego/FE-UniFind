import React, { useContext, useState } from 'react';
import { Form, Modal, Button } from "react-bootstrap";
import { Context } from "../../index";
import { createUniversity } from "../../http/facultyAPI";
import imageCompression from 'browser-image-compression';

const CreateUniversity = ({ show, onHide }) => {
    const { university } = useContext(Context);
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [manager_id, setManager_id] = useState(0);
    const [number, setNumber] = useState('');
    const [coords, setCoords] = useState('');
    const [img, setimg] = useState(null)

    

    const selectFile = async e => {
        console.log(e.target.files)
        const file = e.target.files[0];
        setimg(file)
    }

    const addUniversity = () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("adress", adress)
        formData.append("manager_id", manager_id)
        formData.append("number", number)
        formData.append("coords", coords)
        formData.append("img", img)

        createUniversity(formData).then(data => onHide())
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
                    Добавить университет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите название университета"
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                        placeholder="Введите адрес университета"
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                        value={manager_id}
                        onChange={e => setManager_id(Number(e.target.value))}
                        placeholder="Введите номер университета"
                        type="number"
                        style={{ marginBottom: '15px' }}
                    />
                     <Form.Control
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        placeholder="Введите контактный номер университета"
                        as="textarea"
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                        value={coords}
                        onChange={e => setCoords(e.target.value)}
                        placeholder="Введите описание университета"
                        as="textarea"
                        rows={3}
                        style={{ marginBottom: '15px' }}
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addUniversity}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateUniversity;
