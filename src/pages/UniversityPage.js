import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import UniversityList from '../components/UniversityList';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchUniversity } from "../http/facultyAPI";

const UniversityPage = observer(() => {
  const { university } = useContext(Context);

  const [scoreButtonText, setScoreButtonText] = useState('Общая сумма баллов');
  const [specialtyButtonText, setSpecialtyButtonText] = useState('Специальность');

  useEffect(() => {
    fetchUniversity().then(data => university.setUniversities(data));
  }, [university]);

  const handleScoreSelect = (eventKey) => {
    setScoreButtonText(eventKey);
  };

  const handleSpecialtySelect = (eventKey) => {
    setSpecialtyButtonText(eventKey);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center" style={{ height: '12vh' }}>
        <Col md={7} className="d-flex justify-content-center">
          <DropdownButton
            id="dropdown-basic-button"
            title={scoreButtonText}
            variant="dark"
            onSelect={handleScoreSelect}
            style={{ margin: '30px', width: '175px', height: '56px' }}
          >
            <Dropdown.Item eventKey="от 0 до 50">от 0 до 50</Dropdown.Item>
            <Dropdown.Item eventKey="от 50 до 100">от 50 до 100</Dropdown.Item>
            <Dropdown.Item eventKey="от 100 до 150">от 100 до 150</Dropdown.Item>
            <Dropdown.Item eventKey="от 150 до 200">от 150 до 200</Dropdown.Item>
            <Dropdown.Item eventKey="от 200 до 250">от 200 до 250</Dropdown.Item>
            <Dropdown.Item eventKey="от 250 до 300">от 250 до 300</Dropdown.Item>
            <Dropdown.Item eventKey="от 300 до 350">от 300 до 350</Dropdown.Item>
            <Dropdown.Item eventKey="от 350 до 400">от 350 до 400</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="dropdown-basic-button"
            title={specialtyButtonText}
            variant="dark"
            onSelect={handleSpecialtySelect}
            style={{ margin: '30px', width: '175px', height: '56px' }}
          >
            <Dropdown.Item eventKey="Автоматизация технологических процессов">Автоматизация технологических процессов</Dropdown.Item>
            <Dropdown.Item eventKey="Автосервис">Автосервис</Dropdown.Item>
            <Dropdown.Item eventKey="Агрономия">Агрономия</Dropdown.Item>
            <Dropdown.Item eventKey="География">География</Dropdown.Item>
            <Dropdown.Item eventKey="Математика и информатика">Математика и информатика</Dropdown.Item>
            <Dropdown.Item eventKey="Программная инженерия">Программная инженерия</Dropdown.Item>
            <Dropdown.Item eventKey="Программное обеспечение информационных технологий">Программное обеспечение информационных технологий</Dropdown.Item>
            <Dropdown.Item eventKey="Программное обеспечение компьютерных систем">Программное обеспечение компьютерных систем</Dropdown.Item>
            <Dropdown.Item eventKey="Управление информационными ресурсами">Управление информационными ресурсами</Dropdown.Item>
          </DropdownButton>

          <Button 
             id="dropdown-basic-button"
            variant='dark'
            style={{ margin: '30px', width: '100px', height: '40px' }}
          >Искать
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <UniversityList />
        </Col>
      </Row>
    </Container>
  );
});

export default UniversityPage;
