import React from "react";
import { connect } from "react-redux";
import { UpdateProducts } from "../Redux/Action";
import { ProductAPIBaseUrl } from "../Utils/Constant";
import LoadingIndicator from "./LoadingIndicator";
import axios from "axios";

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
                this is the list of products
                {products.map((product) => {
                    return <>
                    <p>Name: {product.name}</p>
                    </>
                })}
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

