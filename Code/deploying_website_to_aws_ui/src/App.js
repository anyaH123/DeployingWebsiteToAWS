import {Provider} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductOverview from "./Products/ProductOverview";
import Products from "./Products/ProductsDetails";
import productsStore from "./Redux/Store";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <Provider store={productsStore}>
      <div className="App">
        <p>Hi this is the test website</p>
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<ProductOverview />} />
              <Route path="products" element={<Products />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
