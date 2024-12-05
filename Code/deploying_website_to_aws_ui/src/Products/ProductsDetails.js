import React from "react";
import { connect } from "react-redux";
import { UpdateProducts } from "../Redux/Action";
import { ProductAPIBaseUrl } from "../Utils/Constant";
import LoadingIndicator from "./LoadingIndicator";
import axios from "axios";
import Card from 'react-bootstrap/Card';

function Products(props) {
    const { products, UpdateProducts } = props;
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        axios.get(ProductAPIBaseUrl + "/api/products")
            .then(function (response) {
                // handle success
                if (response.status === 200) {
                    UpdateProducts(response.data);
                    setIsLoading(false);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsLoading(false);
            })
            .finally(function () {
                // always executed
                setIsLoading(false);
            });
    }, [])
    return <>
        {isLoading && <LoadingIndicator></LoadingIndicator>}
        {products && products.length > 0 ?
            <>
                <h6 className="display-4 font-weight-normal product-title">
                    Product List
                </h6>
                <div className="container">
                    <div className="row">
                        {products.map((product) => {
                            return <>
                                <div className="col-md-3" style={{ paddingBottom: '20px' }}>
                                    <Card>
                                        <Card.Body className="card-body">
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>
                                                {product && product.data && product.data.color && product.data.color}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </> :
            <>
                {!isLoading &&
                    <> No products available </>
                }
            </>
        }
    </>
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        UpdateProducts: (payload) => dispatch(UpdateProducts(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

