import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Pelicula(props) {
  return (
<>
<Card border='dark' style={{ width: '70%' }}>
      <Card.Header><h2>{props.titulo}</h2></Card.Header>
      <Row >

        <Col>
          <Card.Img variant="top" src={props.img} />
        </Col>
        <Col>
          <Card.Body >
            <Card.Title>{"Sinopsis:"}</Card.Title>
            <Card.Text>
              {props.descripcion}
            </Card.Text>
          </Card.Body>

          <ListGroup className="list-group-horizontal">
            <ListGroup.Item>{props.duracion}</ListGroup.Item>
            <ListGroup.Item>{props.actores}</ListGroup.Item>

          </ListGroup>

        
          <Card.Body>
            <Card.Link href={props.trailer}>Ver Trailer</Card.Link>

          </Card.Body>
        </Col>



      </Row>

    </Card>
</>
    





  );
}
export default Pelicula;