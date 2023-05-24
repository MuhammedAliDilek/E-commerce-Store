import Layout from "../../components/Layout";
import ProductItem from "../../components/Productitems";
import SwiperAds from "../../components/swiper";
import data from "../../utils/data";
import CategorySection from "../../components/categorySection";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="my-4">
        <SwiperAds items={data.ads} />
      </div>
      <div className="grid gap-4 grid-cols-6">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      <div>
        <CategorySection />
      </div>
    </Layout>
  );
}
