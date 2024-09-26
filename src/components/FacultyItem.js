import React from 'react';
import { Card, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { SPECIALITY_ROUTE} from '../utils/consts';


const FacultyItem = ({faculties}) => {

    const navigate = useNavigate()

    // const filteredUniversity = Object.keys(university)
    //     .filter(key => key !== "id" && key !== "manager_id" && key !== "name")
    //     .reduce((obj, key) => {
    //         obj[key] = university[key];
    //         return obj;
    //     }, {});
    console.log(faculties)
    return (
        <Col className="mt-3" onClick={() => navigate(SPECIALITY_ROUTE + '/' + faculties.id)}>
            <Card style={{width: 300, cursor: 'pointer'}} border={"light"}>
            
            
                <div  className="text-center"><h3 className="d-flex align-items-center">{faculties.name}</h3></div>
                

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

export default FacultyItem;