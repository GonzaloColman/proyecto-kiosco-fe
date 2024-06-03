'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PageLogIn() {
	return (
		<main >
			<Form>
				<Form.Group className="mb-3" controlId="IdEmail">
					<Form.Label>Correo</Form.Label>
					<Form.Control type="email" placeholder="correo" />
					<Form.Text className="text-muted">

					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="IdContraceña">
					<Form.Label>Contraceña</Form.Label>
					<Form.Control type="password" placeholder="Contraceña" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</main>
	);
}