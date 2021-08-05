import React, {Fragment} from 'react'

import { Row  } from 'react-bootstrap';
import {Form, Button } from 'react-bootstrap'

const AgregarPacientes = () => {
    return (
        <Fragment>
             <Button variant="primary" className="btn-block font-weight-bold "> Agregar Paciente</Button>

            <Form className="text-left">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Nombre Propietario</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Nombre Propietario" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Row className="mx-auto">
                    <Form.Group className="mb-4 mr-2" controlId="formBasicEmail">
                        <Form.Label>Nombre Mascota</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Nombre Mascota" />                    
                    </Form.Group>
                    <Form.Group className="mb-4 mr-2" controlId="formBasicEmail">
                        <Form.Label>Especie</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Especie" />                    
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="number" size="lg" placeholder="Edad" />                    
                    </Form.Group>
                </Row>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Sintomas</Form.Label>
                        <Form.Control 
                            as="textarea"  
                            placeholder="Sintomas"
                            size="lg"
                            style= {{height: '100px'}}                        
                         />                    
                    </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Agregar Estudio</Form.Label>
                    <Form.Control  type="file" multiple />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Contacto</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Contacto" />
                </Form.Group>
               
                <Button variant="primary" type="submit" className="font-weight-bold btn-block">
                    Agregar
                </Button>
            </Form>
        </Fragment>
    )
}

export default AgregarPacientes
