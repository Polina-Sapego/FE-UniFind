import React, { Component } from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import UniversityItem from './UniversityItem';


const UniversityList = () => {

    const navigate = useNavigate()

    const universities = [
        {id: 1, name: "BSU", adress: "Minsk street 20", manager_id: 1,coords: "57.85420, 122.45600"},
        {id: 2, name: "VSU", adress: "Vitebsk street 20", manager_id: 1,coords: "57.85420, 122.45600"},
        {id: 3, name: "PSU", adress: "Polotsk street 20", manager_id: 1,coords: "57.85420, 122.45600"},
        {id: 4, name: "GSU", adress: "Gomel street 20", manager_id: 1,coords: "57.85420, 122.45600"},

    ];

    return (
        <Row>
            {universities.map(univer => 
                <UniversityItem key={univer.id} university={univer}/> )}
        </Row>
    );
};

export default UniversityList;
