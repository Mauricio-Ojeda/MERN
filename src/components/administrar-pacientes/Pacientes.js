import React from 'react'
import SideBar from './SideBar';

import {Container, Row, Col} from 'react-bootstrap';

const Pacientes = () => {
    return (
      <Container className="container-pacientes">
          <Row >
            <Col sm={12} md={4}> 
              <SideBar/>
            </Col>  
            <Col>
                  <h1>Main</h1>
            </Col>
          </Row>
      </Container>
    )
}

export default Pacientes
