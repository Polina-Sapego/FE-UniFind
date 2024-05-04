import React, { useContext, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const PersonalCabinet = () => {
  const user = {
    login: '123321',
    password: 'Polina1',
    name: 'Polina',
    dob: '21-03-2003',
  };

  return (
    <Container className="d-flex mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Personal Information</Card.Title>
          <ul className="list-group list-group-flush">
            {user &&
              Object.entries(user).map(([label, value]) => (
                <li className="list-group-item" key={label}>
                  {label}: {value}
                </li>
              ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PersonalCabinet;
