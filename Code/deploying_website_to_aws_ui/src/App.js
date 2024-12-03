import {Provider} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap";
import ProductOverview from "./Products/ProductOverview";
import Products from "./Products/ProductsDetails";
import productsStore from "./Redux/Store";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <Provider store={productsStore}>
      <Container fluid className="App bg-body-tertiary" style={{height: "100vh"}}>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<ProductOverview />} />
              <Route path="products" element={<Products />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </Container>
    </Provider>
  );
}

export default App;
