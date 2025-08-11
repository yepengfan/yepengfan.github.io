import { ProductInfoProps } from "../types";

export default function ProductInfo(props: ProductInfoProps) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <ul>
        {props.inventory.map((item) => (
          <li key={item.sku}>
            {item.color} - {item.size} - {item.list_price}
          </li>
        ))}
      </ul>
    </div>
  );
}
