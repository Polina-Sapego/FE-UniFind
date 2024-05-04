import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

const Special = () => {
    const specs = [
        { id: 1, name: "POKS" },
        { id: 2, name: "WEB" },
        { id: 3, name: "POIT" },
        { id: 4, name: "PM" }
    ];

    return (
        <Component>
            {specs.map(spec => (
                <Card key={spec.id}>{spec.name}</Card>
            ))}
        </Component>
    );
};

export default Special;
