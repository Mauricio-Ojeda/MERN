import React, {Fragment, useState} from 'react'

import { Row  } from 'react-bootstrap';
import {Form, Button } from 'react-bootstrap'

const AgregarPacientes = () => {

    //State para el Paciente
    const [paciente, setPaciente] = useState({
        propietario:'',
        contacto:'',
        nombreMascota:'',
        especieyTipo: '',
        edad:'',
        sintomas:''      

    })

    //State Guardar archivos

    const [files, setFiles] = useState(null)

    //destructuring informacion paciente
    const { propietario, contacto, nombreMascota, especieyTipo, edad, sintomas } = paciente;

    const onChangePaciente = e => {
        
        setPaciente({...paciente,
            [e.target.name] : e.target.value
        })    

    }

    const onChangeFiles = e => {
        console.log(e);
        setFiles(e)        
    }

    
    return (
        <Fragment>
             <Button variant="primary" className="btn-block font-weight-bold "> Agregar Paciente</Button>

            <Form className="text-left font-weight-bold mt-5">
                <Form.Group className="mb-4" controlId="formBasicPropietario">
                    <Form.Label >Nombre Propietario</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Nombre Propietario" name="propietario" value={propietario}  onChange={onChangePaciente} />
                   
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Contacto</Form.Label>
                    <Form.Control type="email" size="lg"  placeholder="user@email.com" nombre="contacto" value={contacto}  onChange={onChangePaciente} />
                </Form.Group>
                <Row className="mx-auto">
                    <Form.Group className="mb-4 mr-2" controlId="formBasicNombreMascota">
                        <Form.Label>Nombre Mascota</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Nombre Mascota" name="nombreMascota" value={nombreMascota}  onChange={onChangePaciente}/>                    
                    </Form.Group>
                    <Form.Group className="mb-4 mr-2" controlId="formBasicEspecie">
                        <Form.Label>Especie y Tipo</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Especie" name="especieyTipo" value={especieyTipo}  onChange={onChangePaciente} />                    
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEdad">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="number" size="lg" placeholder="Edad" name="edad" value={edad}  onChange={onChangePaciente}/>                    
                    </Form.Group>
                </Row>
                <Form.Group className="mb-4" controlId="formBasicSintomas">
                        <Form.Label>Sintomas</Form.Label>
                        <Form.Control 
                            as="textarea"  
                            placeholder="Sintomas"
                            size="lg"
                            style= {{height: '100px'}}
                            name= "sintomas"
                            value={sintomas}
                            onChange={onChangePaciente}                       
                         />                    
                    </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-5">
                    <Form.Label>Agregar Estudios</Form.Label>
                    <Form.Control  type="file" multiple name="estudios"  onChange={(e) => onChangeFiles(e.target.files)}/>
                </Form.Group>                
               
                <Button variant="primary" type="submit" className="font-weight-bold btn-block">
                    Agregar
                </Button>
            </Form>
        </Fragment>
    )
}

export default AgregarPacientes
