'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from '@/app/componente/header_footer/header';
import Footer from '@/app/componente/header_footer/footer';
import clienteAxios from '../../services/axios';
import React, { useState } from 'react';


export default function NewAccount() {
	const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleRegistro = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Envía los datos al backend (Nest.js)
      await clienteAxios.post('/registro', {
        nombre,
        correo,
        contraseña,
        direccion,
      });

      // Maneja la respuesta exitosa (puedes redirigir al usuario, mostrar un mensaje, etc.)
      console.log('Registro exitoso');
    } catch (error) {
      // Maneja errores (puedes mostrar un mensaje de error al usuario)
      console.error('Error al registrar:', error);
    }
  };
	return (
		< >
			<Header />
			<div className='color'>
				<Form className='margenes' onSubmit={handleRegistro}>
					<Row className="mb-3">
						<Form.Group className="mb-3" controlId="formNombre">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre completo"
            />
						</Form.Group>

						<Form.Group as={Col} controlId="formEmail">
							<Form.Label>Correo</Form.Label>
							<Form.Control
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Ingresa tu correo"
            />
						</Form.Group>

						<Form.Group as={Col} controlId="formContraseña">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Contraseña"
            />
						</Form.Group>

						<Form.Group as={Col} controlId="formContraceña2">
							<Form.Label>Repite Contraceña</Form.Label>
							<Form.Control type="password" placeholder="Contraceña" />
						</Form.Group>
					</Row>

					<Form.Group className="mb-3" controlId="formDireccion">
						<Form.Label>Direccion</Form.Label>
						<Form.Control
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Direccion"
            />
					</Form.Group>

					<Button variant="primary" type="submit" onClick={handleRegistro}>
						Registrar
					</Button>
				</Form>
			</div>
			<Footer />
		</>
	);
}