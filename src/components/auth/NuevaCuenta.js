import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../layout/login-nuevaCuenta.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';


const NuevaCuenta = () => {

    const [user, setUser] = useState({
        name:'',
        email:'',
        password: '',
        confirm:''
    })

    // destructuring user state
    const {name, email, password, confirm } = user;

    const handleOnChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.prenvent.default()

        // validar que no haya campos vacios

        // password minimo de 6 caracteres

        // 2 password sean iguales

        //pasarlo al action
    }

    return (
                   
            <Container id="body" >
                <h1 id="title" className="mb-5 p-3">Crear Cuenta</h1>
                <Container className="container-row col-md-6 col-sm-8" >
                    <Row  >                        
                        <Col className="mt-2 p-5 d-flex align-items-center" >
                            <Form className="form w-100 mt-4" onSubmit={handleOnSubmit} >
                                
                                <Form.Group controlId="formBasicText">
                                    <Form.Label>Nombre de Usuario</Form.Label>
                                    <Form.Control 
                                        name="name" 
                                        value={name} 
                                        onChange={handleOnChange} 
                                        className="form-input" 
                                        type="text" 
                                        placeholder="Ingresar Nombre" 
                                    />
                                    
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Dirección de Email</Form.Label>
                                    <Form.Control 
                                        name="email" 
                                        value={email} 
                                        onChange={handleOnChange} 
                                        className="form-input" 
                                        type="email" 
                                        placeholder="Ingresar email" 
                                    />
                                    
                                </Form.Group>


                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control 
                                        name="password" 
                                        value={password} 
                                        onChange={handleOnChange} 
                                        className="form-input" 
                                        type="password" 
                                        placeholder="Contraseña" 

                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicConfirm">
                                    <Form.Label>Repetir Contraseña</Form.Label>
                                    <Form.Control 
                                        name="confirm" 
                                        value={confirm} 
                                        onChange={handleOnChange} 
                                        className="form-input" 
                                        type="password" 
                                        placeholder="Repetir Contraseña" 

                                    />
                                </Form.Group>
                                
                                <Button  className=" btn-block font-weight-bold mt-5 mb-3 " variant="primary" type="submit">
                                    Registrarse
                                </Button>
                                <Link to={'/'} className="nueva-cuenta">
                                    Volver a Iniciar Sesion
                                </Link>
                            </Form>

                            
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        
    )
}

export default NuevaCuenta
