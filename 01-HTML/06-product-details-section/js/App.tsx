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
        rating={data.rating}
        reviews={data.reviews}
        colors={data.colors}
        sizes={data.sizes}
        description={data.description}
        info={data.info}
        inventory={data.inventory}
      />
    </div>
  );
}

export default App;
