import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductoPage = ({ producto }) => {
  return (
    <Container className="mt-4">
        <Card className='col-12'>
            <Row>
                <Col>
                    <img src="https://via.placeholder.com/150" className='w-100' alt="Producto"/>
                </Col>
                <Col>
                    <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <strong>Precio:</strong> ${producto.precio}
                        </li>
                        <li className="list-group-item">
                        <strong>SKU:</strong> {producto.sku}
                        </li>
                        <li className="list-group-item">
                        <strong>Cantidad Disponible:</strong> {producto.stock}
                        </li>
                    </ul>
                    <Col className='d-flex justify-content-end'>
                        <Button variant="primary">Comprar</Button>
                    </Col>
                    </Card.Body>
                </Col>
            </Row>  
        </Card>
    </Container>
  );
};

export default ProductoPage;