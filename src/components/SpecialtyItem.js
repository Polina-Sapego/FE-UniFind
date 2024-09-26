import React from 'react';
import { Card, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FACULTY_ROUTE } from '../utils/consts';


const SpecialtyItem = ({specialities}) => {

    const navigate = useNavigate()

    // const filteredUniversity = Object.keys(university)
    //     .filter(key => key !== "id" && key !== "manager_id" && key !== "name")
    //     .reduce((obj, key) => {
    //         obj[key] = university[key];
    //         return obj;
    //     }, {});

    return (
        <Col className="mt-3" onClick={() => navigate( )}>
            <Card style={{width: 1110, cursor: 'pointer'}} border={"light"}>
        
          
                <div ><h6 className="d-flex align-items-center">{specialities.name}</h6></div>
                <div>{specialities.description}</div>
                <div>Колличество баллов на бюджет: {specialities.code}</div>
                <div>Колличество баллов на платное: {specialities.code-20}</div>
                {/* {Object.entries(filteredUniversity).map(([key, value]) => (
                    <div key={key} className="mb-3">
                        <strong>{key}: </strong>
                        {value}
                    </div>
                ))} */}
                
            </Card>
        </Col>
    );
};

export default SpecialtyItem;
