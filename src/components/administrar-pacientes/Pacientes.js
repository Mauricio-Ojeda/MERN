import React from 'react'
import SideBar from './SideBar';
import Barra from './Barra';

import {Container, Row, Col} from 'react-bootstrap';

const Pacientes = () => {
    return (
      <Container className="container-pacientes ">
          <Row className="mt-5">
            <Col sm={12} md={4}> 
              <SideBar/>
            </Col>  
            <Col className="col2-pacientes p-0">
                  <Barra/>
            </Col>
          </Row>
      </Container>
    )
}

export default Pacientes
