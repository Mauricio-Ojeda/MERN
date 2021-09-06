import React from 'react';

import {ListGroup, Button} from 'react-bootstrap'

const Paciente = ({paciente}) =>{
    return(
        <ListGroup.Item as="li" >
            <Button className="btn-block mb-2" size="lg" variant="secondary"> {paciente.nombre} </Button>
        </ListGroup.Item>
        
    );
}

export default Paciente;