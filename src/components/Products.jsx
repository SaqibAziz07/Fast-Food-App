import Card from "./Card";

function Products({ products = [], openProductModal }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <Card 
          key={product.id} 
          product={product} 
          openProductModal={openProductModal}
          // addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Products;