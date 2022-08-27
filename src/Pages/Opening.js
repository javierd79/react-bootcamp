import React from 'react';
import { Container, Col } from 'reactstrap';
import '../Assets/index.scss';

function Opening() {

  return (
    <div className="opening">
      <div className='tittleOpening'>
          <h1>Digimon Adventure - Opening</h1>
      </div>
      <Container className='contOpening'>
        <Col className='openingCol'>
          <iframe src="https://www.youtube.com/embed/EOuHn6eiyjI" title="Digimon Adventure 01 Opening Español Latino (720p)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Container>
    </div>
  );
}

export default Opening;
