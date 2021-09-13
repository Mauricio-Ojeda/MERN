import React from 'react'
import SideBar from './SideBar';
import Main from './Main';

import '../layout/administradorPacientes.css'
import {Container, Row, Col} from 'react-bootstrap';

const AdministrarPacientes = () => {
    return (
      <Container className="container-general container-pacientes ">
          <Row className="mt-5">
            <Col className=" container-pacientes " sm={12} md={4}> 
              <SideBar/>
            </Col>  
            <Col className="container-pacientes col2-pacientes p-0">
                 <Main
                   
                 />
            </Col>
          </Row>
      </Container>
    )
}

export default AdministrarPacientes
