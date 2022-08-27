import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardSubtitle, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import '../Assets/index.scss';

function Digimons() {
  const [digimon, setDigimon] = useState([]);
  const [digimonLevel, setDigimonLevel] = useState('All')
  const [digimonName, setDigimonName] = useState('')
  const [digimonExist, setDigimonExist] = useState(true)
  const [digimonStatus, setDigimonStatus] = useState(true)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(!dropdownOpen)

  const existStatus = (param) =>{
    if (param === '') {
      setDigimonExist(true)
      setDigimonName('')
    }
    else{
      setDigimonExist(false)
      setDigimonName(param)
    }

    console.log(digimonName)
  }

  const toggleStatus = (param) =>{
    if(param === undefined){
      setDigimonStatus(undefined)
      setDigimonLevel(undefined)
    }if (param === 'All') {
      setDigimonStatus(true)
      setDigimonLevel('All')
    }else{
      setDigimonStatus(false)
      setDigimonLevel(param)
    }
  }

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
    <Container className='container'>
      <div className='containerChild'>
        <h1>Niveles Digimon</h1>
        <Dropdown className='dropdown' isOpen={dropdownOpen} toggle={toggle} direction="down">
          <DropdownToggle caret className='toggle'>Levels</DropdownToggle>
          <DropdownMenu>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('In Training')}>In training</DropdownItem>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('Rookie')}>Rookie</DropdownItem>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('Ultimate')}>Ultimate</DropdownItem>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('Fresh')}>Fresh</DropdownItem>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('Mega')}>Mega</DropdownItem>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('Armor')}>Armor</DropdownItem>
            <DropdownItem className="dropItem text-center" onClick={() => toggleStatus('All')}>All</DropdownItem>
          </DropdownMenu>
        </Dropdown> 
        <Form className='formGroup'>
          <FormGroup>
            <Input className='input' placeholder="Agumon" type="text" onChange={(e) => existStatus(e.target.value)}/>
          </FormGroup>
          <Button className='searchBtn' type="button" onClick={()=> toggleStatus(undefined)}>
            Refresh
          </Button>
        </Form>
      </div>
      <Row className='Row'>
      {
        digimonStatus === true ? (
        digimon.map((digimon)=> (
            <Col className="col">
              <Card className='card'>
                <img src={digimon.img} alt={digimon.name} />
                <CardBody>
                  <h5 className="text-center">{digimon.name}</h5>
                </CardBody>
                <CardSubtitle className="text-center">
                  <h6>{digimon.level}</h6>
                </CardSubtitle>
              </Card>
            </Col>
        ))
        ):(
          digimon.filter(digimons => digimons.level === digimonLevel).map((digimon)=> (
            <Col className="col">
              <Card className='card'>
                <img src={digimon.img} alt={digimon.name} />
                <CardBody>
                  <h5 className="text-center">{digimon.name}</h5>
                </CardBody>
                <CardSubtitle className="text-center">
                  <h6>{digimon.level}</h6>
                </CardSubtitle>
              </Card>
            </Col>
          ))
        )
      }
      {
        digimonExist === true ? (
          ()=> (
              <div className="msg">
                <h1> Ya no se encontraron más Digimon</h1>
              </div>
          )):(
            digimon.filter(digimons => digimons.name.toLowerCase() === digimonName.toLowerCase()).map((digimon)=> (
              <Col className="col">
                <Card className='card'>
                  <img src={digimon.img} alt={digimon.name} />
                  <CardBody>
                    <h5 className="text-center">{digimon.name}</h5>
                  </CardBody>
                  <CardSubtitle className="text-center">
                    <h6>{digimon.level}</h6>
                  </CardSubtitle>
                </Card>
              </Col>
            ))
          )
      }
      </Row>
    </Container>
  )
}

export default Digimons