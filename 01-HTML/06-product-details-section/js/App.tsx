import React from "react";
import ProductImages from "./components/ProductImages";
import data from "../data/data.json";

function App() {
  return (
    <div className="py-12 px-4">
      {/* Your React app content goes here */}
      <ProductImages images={data.images} />
      <h1 className="text-5xl text-center font-semibold pt-20">
        Hello React World! This is now a React app.
      </h1>
    </div>
  );
}

export default App;
