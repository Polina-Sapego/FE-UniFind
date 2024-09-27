import React from 'react';
import { Card, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FACULTY_ROUTE } from '../utils/consts';
import Image from "react-bootstrap/Image";

const UniversityItem = ({university}) => {

    const navigate = useNavigate()

    return (
        <Col className="mt-3" onClick={() => navigate(FACULTY_ROUTE + '/' + university.id)}>
            <Card style={{width: 300, cursor: 'pointer'}} border={"light"}>
            <Image width={300} height={150} src={'http://localhost:5555/' + university.img}
            />
                <div ><h6 className="d-flex align-items-center">{university.name}</h6></div>
                <div>{university.adress}</div>
                <div>{university.number}</div>
                
            </Card>
        </Col>
    );
};

export default UniversityItem;
