import Layout from "../../components/Layout";
import ProductItem from "../../components/Productitem";
import SwiperAds from "../../components/swiper";
import data from "../../utils/data";
import CategorySection from "../../components/categorySection";
import { useCart } from "../../components/useCart";

export default function Home() {
  const { addToCartHandler } = useCart();

  return (
    <Layout title="Home Page">
      <div className="my-4">
        <SwiperAds items={data.ads} />
      </div>
      <div className="grid gap-4 grid-cols-6">
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>
      <div>
        <CategorySection />
      </div>
    </Layout>
  );
}
