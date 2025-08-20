import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import data from "../data/data.json";

function App() {
  return (
    <div className="mx-auto py-12 px-4 flex flex-col gap-12 mw-[375px] md:mw-[768px] lg:flex-row lg:gap-8 lg:p-24 lg:w-full">
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
