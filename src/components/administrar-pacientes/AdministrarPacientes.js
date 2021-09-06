import React from 'react'
import SideBar from './SideBar';
import Main from './Main';

import {Container, Row, Col} from 'react-bootstrap';

const AdministrarPacientes = () => {
    return (
      <Container className="container-pacientes ">
          <Row className="mt-5">
            <Col sm={12} md={4}> 
              <SideBar/>
            </Col>  
            <Col className="col2-pacientes p-0">
                 <Main
                   
                 />
            </Col>
          </Row>
      </Container>
    )
}

export default AdministrarPacientes
