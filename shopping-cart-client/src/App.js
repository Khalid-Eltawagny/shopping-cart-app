import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import data from "./data.json";
import { useState } from "react";
import Filter from "./Components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);

  const allProducts = data;

  const handleFilterBySize = (e) => {
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...allProducts];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            handleFilterByOrder={handleFilterByOrder}
            handleFilterBySize={handleFilterBySize}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
