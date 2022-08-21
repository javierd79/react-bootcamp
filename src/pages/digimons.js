import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardSubtitle, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';

function Digimons() {
  const [digimon, setDigimon] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(!dropdownOpen)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://digimon-api.vercel.app/api/digimon'
        )
        setDigimon(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [setDigimon]);

  return (
    <Container>
      <div className='p-5'>
        <h1>Dropdown</h1>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
          <DropdownToggle caret>Levels</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>In training</DropdownItem>
            <DropdownItem>Rookie</DropdownItem>
            <DropdownItem>Ultimate</DropdownItem>
            <DropdownItem>Fresh</DropdownItem>
            <DropdownItem>Mega</DropdownItem>
            <DropdownItem>Armor</DropdownItem>
            <DropdownItem>All</DropdownItem>
          </DropdownMenu>
        </Dropdown> 
      </div>
      <Row>
      {
        digimon.map((digimon) => (
            <Col className="bg-light border">
              <Card
                outline
                style={{
                  width: '11rem',
                  margin: '1rem'
                }}
              >
                <img src={digimon.img} alt={digimon.name} />
                <CardBody>
                  <h6 className="text-center">{digimon.name}</h6>
                </CardBody>
                <CardSubtitle className="text-center">
                  {digimon.level}
                </CardSubtitle>
              </Card>
            </Col>
        ))
      }
      </Row>
    </Container>
  )
}

export default Digimons