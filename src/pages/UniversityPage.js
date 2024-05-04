import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SPECIALITY_ROUTY } from '../utils/consts';

const UniversityPage = () => {
  const navigate = useNavigate();
  const facs = [
    { id: 1, name: 'ФМиИТ' },
    { id: 2, name: 'Фгияк' },
    { id: 3, name: 'ФКМиС' },
    { id: 4, name: 'ФКСИС' },
    { id: 5, name: 'ФЭТ' },
  ];

  const handleButtonClick = () => {
    navigate(SPECIALITY_ROUTY);
  };

  return (
    <Container>
      {facs.map((fac) => (
        <Button onClick={handleButtonClick} key={fac.id}>
          {fac.name}
        </Button>
      ))}
    </Container>
  );
};

export default UniversityPage;
