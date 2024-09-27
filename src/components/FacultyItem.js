import React from 'react';
import { Card, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { SPECIALITY_ROUTE} from '../utils/consts';


const FacultyItem = ({faculties}) => {

    const navigate = useNavigate()

    return (
        <Col className="mt-3" onClick={() => navigate(SPECIALITY_ROUTE + '/' + faculties.id)}>
            <Card style={{width: 300, cursor: 'pointer'}} border={"light"}>
            
            
                <div  className="text-center"><h3 className="d-flex align-items-center">{faculties.name}</h3></div>
               
            </Card>
        </Col>
    );
};

export default FacultyItem;