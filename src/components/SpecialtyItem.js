import React from 'react';
import { Card, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FACULTY_ROUTE } from '../utils/consts';


const SpecialtyItem = ({specialities}) => {

    const navigate = useNavigate()

    return (
        <Col className="mt-3" onClick={() => navigate( )}>
            <Card style={{width: 1110, cursor: 'pointer'}} border={"light"}>
        
          
                <div ><h6 className="d-flex align-items-center">{specialities.name}</h6></div>
                <div>{specialities.description}</div>
                <div>Колличество баллов на бюджет: {specialities.code}</div>
                <div>Колличество баллов на платное: {specialities.code-20}</div>
                
            </Card>
        </Col>
    );
};

export default SpecialtyItem;
