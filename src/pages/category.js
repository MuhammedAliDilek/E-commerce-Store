import Layout from "../../components/Layout";
import ProductItem from "../../components/Productitems";
import CategorySection from "../../components/CategorySection";
import data from "../../utils/data";

export default function CategoryPage() {
  // Assuming you have a selectedCategory variable to determine the category
  const selectedCategory = "electronics";

  // Filter products based on the selected category
  const filteredProducts = data.products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Layout title="Category Page">
      <div>
        <h1 className="text-2xl font-bold mb-4">
          Category: {selectedCategory}
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-6">
        {filteredProducts.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      <div>
        <CategorySection />
      </div>
    </Layout>
  );
}
