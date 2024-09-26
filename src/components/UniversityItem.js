import React from 'react';
import { Card, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FACULTY_ROUTE } from '../utils/consts';
import Image from "react-bootstrap/Image";

const UniversityItem = ({university}) => {

    const navigate = useNavigate()

    // const filteredUniversity = Object.keys(university)
    //     .filter(key => key !== "id" && key !== "manager_id" && key !== "name")
    //     .reduce((obj, key) => {
    //         obj[key] = university[key];
    //         return obj;
    //     }, {});

    return (
        <Col className="mt-3" onClick={() => navigate(FACULTY_ROUTE + '/' + university.id)}>
            <Card style={{width: 300, cursor: 'pointer'}} border={"light"}>
            <Image width={300} height={150} src={'http://localhost:5555/' + university.img}
            />
                <div ><h6 className="d-flex align-items-center">{university.name}</h6></div>
                <div>{university.adress}</div>
                <div>{university.number}</div>

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

export default UniversityItem;
