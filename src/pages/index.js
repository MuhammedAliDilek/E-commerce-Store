import Layout from "../../components/Layout";
import ProductItem from "../../components/Productitem";
import SwiperAds from "../../components/swiper";
import data from "../../utils/data";
import CategorySection from "../../components/categorySection";
/* import db from "../../utils/db";
 */

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

// random product create hydration problems
/* export default function Home() {
  const shuffled = data.products.sort(() => 0.5 - Math.random());
  const randomProduct = shuffled.slice(0, 6);

  return (
    <Layout title="Home Page">
      <div className="my-4">
        <SwiperAds items={data.ads} />
      </div>
      <div className="grid gap-4 grid-cols-6">
        {randomProduct.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      <div>
        <CategorySection />
      </div>
    </Layout>
  );
} */
/* export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
    },
  };
}
 */
//Klausun yaptigi image function
/* import Layout from "../../components/Layout";
import ProductItem from "../../components/Productitems";
import SwiperAds from "../../components/swiper";
import data from "../../utils/data";
import CategorySection from "../../components/categorySection";

export default function Home() {
for (let i =0; i < imageCat.length; i++) {
  const newProd = data.map((piece)=> {...piece, image: imageCat[i]}); 
}
  const shuffled = data.products.sort(() => 0.5 - Math.random());
  const randomProduct = shuffled.slice(0, 6);

  return (
    <Layout title="Home Page">
      <div className="my-4">
        <SwiperAds items={data.ads} />
      </div>
      <div className="grid gap-4 grid-cols-6">
        {randomProduct.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      <div>
        <CategorySection />
      </div>
    </Layout>
  );
}
 */
