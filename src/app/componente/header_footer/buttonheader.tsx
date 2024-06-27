'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Buttonheader() {
	return (
		<div >
			<div className='titulo'>
				<Button href="/paginas/login"  variant="outline-success">Iniciar Secion</Button>
				<Button  href="/paginas/newaccount" variant="outline-info">Crear Usuario</Button>
			</div>
		</div>
	);
}