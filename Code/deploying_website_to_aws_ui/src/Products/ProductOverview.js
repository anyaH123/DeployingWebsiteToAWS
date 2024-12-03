import { Button } from 'react-bootstrap';

const ProductOverview  = () => {
  return (
    <div>
       <Button as="a" variant="primary" onClick={() => {alert("You clicked the button");}}>
            Bootstrap Button
        </Button>
    </div>
  );
}

export default ProductOverview;