import { Button, Container, Row, Col, Carousel, ExampleCarouselImage } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductOverview = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
          </Col>
          <Col xs={6} className='text-center'>
            <Button as="a" variant="primary" onClick={() => navigate('/products')}>
              Browse Products
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductOverview;