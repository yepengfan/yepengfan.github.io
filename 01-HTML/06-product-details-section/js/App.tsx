import React from "react";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import data from "../data/data.json";

function App() {
  return (
    <div className="py-12 px-4 flex flex-col gap-12">
      <ProductImages images={data.images} />
      <ProductInfo
        name={data.name}
        description={data.description}
        inventory={data.inventory}
      />
    </div>
  );
}

export default App;
