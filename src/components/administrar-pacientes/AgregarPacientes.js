import React, {Fragment} from 'react'

import {Form, Button } from 'react-bootstrap'

const AgregarPacientes = () => {
    return (
        <Fragment>
             <Button variant="primary" className="btn-block font-weight-bold "> Agregar Paciente</Button>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Agregar Estudio</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="font-weight-bold btn-block">
                    Agregar
                </Button>
            </Form>
        </Fragment>
    )
}

export default AgregarPacientes
