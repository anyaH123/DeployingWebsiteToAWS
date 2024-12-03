import {Provider} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductOverview from "./Products/ProductOverview";
import Products from "./Products/ProductsDetails";
import productsStore from "./Redux/Store";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

function App() {
  return (
    <Provider store={productsStore}>
      <div fluid className="App" style={{backgroundColor: "#000"}}>
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
      </div>
    </Provider>
  );
}

export default App;
