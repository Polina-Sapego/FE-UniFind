import React, { Component } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { CATALOG_ROUTE } from '../utils/consts';

const UniversityItem = ({university}) => {

    const navigate = useNavigate()

    const filteredUniversity = Object.keys(university)
        .filter(key => key !== "id" && key !== "manager_id" && key !== "name")
        .reduce((obj, key) => {
            obj[key] = university[key];
            return obj;
        }, {});

    return (
        <Col className="mt-3" onClick={() => navigate(CATALOG_ROUTE + '/' + university.id)}>
            <Card>
                <h3>{university.name}</h3>
                {Object.entries(filteredUniversity).map(([key, value]) => (
                    <div key={key} className="mb-3">
                        <strong>{key}: </strong>
                        {value}
                    </div>
                ))}
            </Card>
        </Col>
    );
};

export default UniversityItem;
