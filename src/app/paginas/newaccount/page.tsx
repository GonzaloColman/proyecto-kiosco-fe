'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function NewAccount() {
	return (
		<main >
			<Form>
				<Row className="mb-3">
					<Form.Group className="mb-3" controlId="formNombre">
						<Form.Label>Nombre</Form.Label>
						<Form.Control placeholder="Nombre completo" />
					</Form.Group>

					<Form.Group as={Col} controlId="formEmail">
						<Form.Label>Correo</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formPassword">
						<Form.Label>Contraceña</Form.Label>
						<Form.Control type="password" placeholder="Contraceña" />
					</Form.Group>

					<Form.Group as={Col} controlId="formPassword2">
						<Form.Label>Repite Contraceña</Form.Label>
						<Form.Control type="password" placeholder="Contraceña" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formDireccion">
					<Form.Label>Direccion</Form.Label>
					<Form.Control placeholder="calle altura." />
				</Form.Group>

				<Button variant="primary" type="submit">
					Registrar
				</Button>
			</Form>

		</main>
	);
}