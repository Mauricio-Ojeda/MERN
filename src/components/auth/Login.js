import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../layout/login-nuevaCuenta.css';
import mascotas from '../../assets/mascotas.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';


const Login = () => {

    const [user, setUser] = useState({
        email:'',
        password: ''
    })

    // destructuring user state
    const { email, password } = user;

    const handleOnChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.prenvent.default()

        // validar que no haya campos vacios

        //pasarlo al action
    }

    return (
                   
            <Container id="body" >
                <h1 id="title" className="mb-5 p-3">Bienvenido! Inicie su Sesion</h1>
                <Container className="container-row col-md-8" >
                    <Row  >
                        <Col className="mb-2" md={6} sm={12}>
                            <img className="w-100 h-100" src={mascotas} alt="mascotas"/>
                        </Col>
                        <Col className="mt-2 p-3 d-flex align-items-center" md={6} sm={12}>
                            <Form className="form w-100 mt-4" onSubmit={handleOnSubmit} >
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
                                
                                <Button 
                                    id="btn-login" 
                                    className=" btn-block font-weight-bold mt-5 mb-3 py-3" 
                                    variant="primary" 
                                    type="submit"
                                >
                                    Iniciar Sesion
                                </Button>
                                <Link to={'/nueva-cuenta'} className="nueva-cuenta">
                                    Crear Cuenta
                                </Link>
                            </Form>

                            
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        
    )
}

export default Login
