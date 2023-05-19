import React from "react";
import Link from "next/link";

const CategorySection = () => {
  const categories = [
    {
      title: "Category 1",
      image: "/images/pants1.jpg",
      bgColor: "bg-blue-200",
      slug: "category1",
    },
    {
      title: "Category 2",
      image: "category2.jpg",
      bgColor: "bg-red-200",
      slug: "category2",
    },
    {
      title: "Category 3",
      image: "category3.jpg",
      bgColor: "bg-yellow-200",
      slug: "category3",
    },
    {
      title: "Category 4",
      image: "category4.jpg",
      bgColor: "bg-green-200",
      slug: "category4",
    },
    {
      title: "Category 5",
      image: "category5.jpg",
      bgColor: "bg-purple-200",
      slug: "category5",
    },
    {
      title: "Category 6",
      image: "category6.jpg",
      bgColor: "bg-pink-200",
      slug: "category6",
    },
    {
      title: "Category 7",
      image: "category7.jpg",
      bgColor: "bg-indigo-200",
      slug: "category7",
    },
    {
      title: "Category 8",
      image: "category8.jpg",
      bgColor: "bg-teal-200",
      slug: "category8",
    },
    {
      title: "Category 9",
      image: "category9.jpg",
      bgColor: "bg-orange-200",
      slug: "category9",
    },
    {
      title: "Category 10",
      image: "category10.jpg",
      bgColor: "bg-gray-200",
      slug: "category10",
    },
  ];

  return (
    <section className="py-10 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore</h2>
        <div className="grid grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link href={`/categories/${category.slug}`} key={index}>
              <div className={`p-4 border rounded-lg ${category.bgColor}`}>
                {category.image && (
                  <div className="relative aspect-w-1 aspect-h-1">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="mt-2 text-center">
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
