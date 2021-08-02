import React from 'react'
import SideBar from './SideBar';

import {Container, Row, Col} from 'react-bootstrap';

const Pacientes = () => {
    return (
      <Container fluid>
          <Row>
              <SideBar/>
              <Col>
                  <h1>Main</h1>
              </Col>
          </Row>
      </Container>
    )
}

export default Pacientes
