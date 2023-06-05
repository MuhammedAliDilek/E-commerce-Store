import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategorySection = () => {
  const categories = [
    {
      title: "Electronics",
      image: "/images/category/electronics.jpg",
      bgColor: "bg-blue-200",
    },
    {
      title: "Clothes",
      image: "/images/category/clothes.jpg",
      bgColor: "bg-red-200",
    },
    {
      title: "Books",
      image: "/images/category/books.jpg",
      bgColor: "bg-yellow-200",
    },
    /* {
      title: "Category 4",
      image: "",
      bgColor: "bg-green-200",
    },
    {
      title: "Category 5",
      image: "",
      bgColor: "bg-purple-200",
    },
    {
      title: "Category 6",
      image: "",
      bgColor: "bg-pink-200",
    },
    {
      title: "Category 7",
      image: "",
      bgColor: "bg-indigo-200",
    },
    {
      title: "Category 8",
      image: "",
      bgColor: "bg-teal-200",
    },
    {
      title: "Category 9",
      image: "",
      bgColor: "bg-orange-200",
    },
    {
      title: "Category 10",
      image: "",
      bgColor: "bg-gray-200",
    }, */
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore</h2>
        <div className="grid grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link href={`/categories/${category.slug}`} key={index}>
              <div className={`p-4 border rounded-lg ${category.bgColor}`}>
                {category.image && (
                  <div className="relative aspect-w-1 aspect-h-1">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={300}
                      height={300}
                      className="rounded-lg"
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
