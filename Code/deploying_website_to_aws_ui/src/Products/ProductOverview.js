import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductOverview = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button as="a" variant="primary" onClick={() => navigate('/products')}>
        Browse Products
      </Button>
    </div>
  );
}

export default ProductOverview;