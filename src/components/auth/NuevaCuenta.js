import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../layout/login-nuevaCuenta.css';
import {Container, Col} from 'react-bootstrap';
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
                   
            <Container   >                
                <Container className="container-row p-3 col-md-6 col-sm-8" >
                         <h1 id="title" className="mb-3 p-4">Crear Cuenta</h1>

                        <Col className="my-2 p-0 w-90 d-flex align-items-center" >
                            <Form className="form p-5 mt-4" onSubmit={handleOnSubmit} >
                                
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
                                    <Form.Label>Direcci??n de Email</Form.Label>
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
                                    <Form.Label>Contrase??a</Form.Label>
                                    <Form.Control 
                                        name="password" 
                                        value={password} 
                                        onChange={handleOnChange} 
                                        className="form-input" 
                                        type="password" 
                                        placeholder="Contrase??a" 

                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicConfirm">
                                    <Form.Label>Repetir Contrase??a</Form.Label>
                                    <Form.Control 
                                        name="confirm" 
                                        value={confirm} 
                                        onChange={handleOnChange} 
                                        className="form-input" 
                                        type="password" 
                                        placeholder="Repetir Contrase??a" 

                                    />
                                </Form.Group>
                                
                                <Button  className=" btn-block font-weight-bold mt-5 mb-3 " variant="primary" type="submit">
                                    Registrarse
                                </Button>
                                <Link to={'/'} className="nueva-cuenta ">
                                    Volver a Iniciar Sesion
                                </Link>
                            </Form>

                            
                            
                        </Col>
                  
                </Container>
            </Container>
        
    )
}

export default NuevaCuenta
