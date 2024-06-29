'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ProductosCard = (props: Productos) => {
	const { Nombre, Descripcion, Stock, Precio} = props;
	const { id, setId } = useContext(IdContext); // Usa IdContext aquí

	return (
		<Card className="card-container" onClick={() => setId(props.id)}>
			<Card.Img className="card-image" variant="top" src={} />
			<div className="card-content">
				<Card.Body>
					<Card.Text>
						Precio: {}
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Nombre: {}</ListGroup.Item>
					<ListGroup.Item>descripcion: {}</ListGroup.Item>
					<ListGroup.Item>stock: {}</ListGroup.Item>
          <button>Comprar</button>
				</ListGroup>
			</div>
		</Card>
	);
}
