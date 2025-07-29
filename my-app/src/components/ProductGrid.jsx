import ProductCard from "./ProductCard";
export default function ProductGrid({ products, empty, query }) {
  if (empty && query)
    return <div>No items found for "{query}"</div>;
  if (!products.length)
    return <div>No items in this category.</div>;
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 24}}>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
