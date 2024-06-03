'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Header() {
	return (
		<div >
			<div className='titulo'>
				<h1>Kiosco</h1>
				<h4>venta y organizacion de stock</h4>
				<Button href="/paginas/login"  variant="outline-success">Iniciar Secion</Button>
				<Button  href="/paginas/newaccount" variant="outline-info">Crear Usuario</Button>
			</div>
		</div>
	);
}