import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      id: 999,
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      id: 9999,
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  ads: [
    {
      id: 3,
      name: "Wireless Headphones",
      slug: "wireless-headphones",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Wireless headphones",
      price: 129.99,
      brand: "Bose",
      rating: 4.7,
      numReviews: 250,
      isFeatured: true,
      countInStock: 30,
      description:
        "High-quality wireless headphones with noise-canceling technology.",
    },

    {
      id: 4,
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Clothing",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner1.jpg",
    },
    {
      id: 23,
      name: "Leather Boots",
      slug: "leather-boots",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGVhdGhlciUyMEJvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Leather boots",
      price: 129.99,
      brand: "Timberland",
      rating: 4.3,
      numReviews: 95,
      isFeatured: true,
      countInStock: 18,
      description: "Stylish and durable leather boots for all-season wear.",
    },
    {
      id: 5,
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Clothing",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner2.jpg",
    },

    {
      id: 6,
      name: "Digital Camera",
      slug: "digital-camera",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2017/08/28/19/00/camera-2690909_640.png",
      alt: "Digital camera",
      price: 599.99,
      brand: "Canon",
      rating: 4.4,
      numReviews: 220,
      countInStock: 12,
      isFeatured: true,
      description:
        "A high-quality digital camera for capturing stunning photos and videos.",
    },
    {
      id: 7,
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Clothing",
      image: "/images/pants1.jpg",
      alt: "Golf pants",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      isFeatured: true,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      id: 38,
      name: "Running Shoes",
      slug: "running-shoes",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2015/11/05/22/33/sneakers-1024979_640.jpg",
      alt: "Running shoes",
      price: 79.99,
      brand: "Nike",
      rating: 4.9,
      numReviews: 150,
      isFeatured: true,
      countInStock: 30,
      description:
        "High-performance running shoes designed for comfort and support.",
    },
    {
      id: 9,
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Clothing",
      image: "/images/pants3.jpg",
      alt: "Classic pants",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      isFeatured: true,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
  products: [
    {
      id: 10,
      name: "Free Hugs",
      slug: "free-hugs",
      category: "Clothing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIiGTJ6qBiFOdHrQwDb7tNgqZI9YrPJuWI0PxRRIDMIDzxwq0dk2qqQd5aiyz8RrNGsk&usqp=CAU",
      alt: "Free shirt",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      popularity: 10,
    },
    {
      id: 11,
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Clothing",
      image: "/images/shirt2.jpg",
      alt: "Fit shirt",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      popularity: 13,
      banner: "/images/banner2.jpg",
    },
    {
      id: 12,
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Clothing",
      image: "/images/shirt3.jpg",
      alt: "Slim shirt",
      price: 20,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      id: 13,
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Clothing",
      image: "/images/pants1.jpg",
      alt: "Golf pants",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      id: 14,
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Clothing",
      image: "/images/pants2.jpg",
      alt: "Fit pants",
      price: 95,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      id: 15,
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Clothing",
      image: "/images/pants3.jpg",
      alt: "Classic pants",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      id: 16,
      name: " Very Smart TV",
      slug: "very-smart-tv",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      alt: "Smart TV",
      price: 899,
      brand: "Sony",
      rating: 4.5,
      numReviews: 120,
      countInStock: 10,
      description:
        "A high-definition smart TV with built-in streaming capabilities.",
    },

    {
      id: 17,
      name: "Denim Jacket",
      slug: "denim-jacket",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Denim jacket",
      price: 59.99,
      brand: "Levi's",
      rating: 4.2,
      numReviews: 80,
      countInStock: 15,
      description: "A stylish and durable denim jacket for everyday wear.",
    },

    {
      id: 18,
      name: "The Great Gatsby",
      slug: "the-great-gatsby",
      category: "Books",
      image:
        "https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwR3JlYXQlMjBHYXRzYnklMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "The Great Gatsby book",
      price: 12.99,
      brand: "Penguin Books",
      rating: 4.8,
      numReviews: 200,
      countInStock: 5,
      description:
        "F. Scott Fitzgerald's classic novel depicting the Jazz Age in America.",
    },

    {
      id: 19,
      name: "Wireless Headphones",
      slug: "wireless-headphones",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Wireless headphones",
      price: 129.99,
      brand: "Bose",
      rating: 4.7,
      numReviews: 250,
      countInStock: 30,
      description:
        "High-quality wireless headphones with noise-canceling technology.",
    },

    {
      id: 20,
      name: "Striped T-Shirt",
      slug: "striped-t-shirt",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1598971862255-a19ede03c104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN0cmlwZWQlMjBUJTIwU2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Striped t-shirt",
      price: 19.99,
      brand: "H&M",
      rating: 3.9,
      numReviews: 65,
      countInStock: 25,
      description:
        "A comfortable and fashionable striped t-shirt for casual occasions.",
    },

    {
      id: 21,
      name: "To Kill a Mockingbird",
      slug: "to-kill-a-mockingbird",
      category: "Books",
      image:
        "https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg",
      alt: "To Kill a Mockingbird book",
      price: 10.99,
      brand: "Harper Collins",
      rating: 4.6,
      numReviews: 180,
      countInStock: 8,
      description:
        "Harper Lee's classic novel exploring racial injustice in the Deep South.",
    },

    {
      id: 22,
      name: "Digital Camera XL",
      slug: "digital-XL-camera",
      category: "Electronics",
      image: "/images/camera.jpg",
      alt: "Digital camera",
      price: 349.99,
      brand: "Canon",
      rating: 4.4,
      numReviews: 150,
      countInStock: 12,
      description:
        "A feature-rich digital camera for capturing high-quality photos and videos.",
    },

    {
      id: 23,
      name: "Leather Boots",
      slug: "leather-boots",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGVhdGhlciUyMEJvb3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Leather boots",
      price: 129.99,
      brand: "Timberland",
      rating: 4.3,
      numReviews: 95,
      countInStock: 18,
      description: "Stylish and durable leather boots for all-season wear.",
    },

    {
      id: 24,
      name: "The Lord of the Rings",
      slug: "the-lord-of-the-rings",
      category: "Books",
      image:
        "https://www.norli.no/media/catalog/product/9/7/9780261103252_1.jpg?auto=webp&format=pjpg&width=728&height=910&fit=cover",
      alt: "The Lord of the Rings book",
      price: 29.99,
      brand: "Houghton Mifflin Harcourt",
      rating: 4.9,
      numReviews: 300,
      countInStock: 3,
      description: "J.R.R. Tolkien's epic fantasy trilogy set in Middle-earth.",
    },

    {
      id: 25,
      name: "Smartphone",
      slug: "smartphone",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Smartphone",
      price: 799.99,
      brand: "Apple",
      rating: 4.8,
      numReviews: 500,
      countInStock: 20,
      description:
        "A cutting-edge smartphone with advanced features and a sleek design.",
    },

    {
      id: 26,
      name: "Summer Dress",
      slug: "summer-dress",
      category: "Clothing",
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/05/26/1653551981eb74fd79aae74aa01e9b0f52d4ae9800_thumbnail_600x.webp",
      alt: "Summer dress",
      price: 39.99,
      brand: "Zara",
      rating: 4.1,
      numReviews: 75,
      countInStock: 30,
      description:
        "A lightweight and stylish dress perfect for the summer season.",
    },

    {
      id: 27,
      name: "1984",
      slug: "1984",
      category: "Books",
      image:
        "https://www.penguinrandomhouse.de/content/edition/covervoila_hires/Orwell_G1984_211962.jpg",
      alt: "1984 book",
      price: 14.99,
      brand: "Penguin Books",
      rating: 4.7,
      numReviews: 220,
      countInStock: 7,
      description:
        "George Orwell's dystopian novel exploring themes of totalitarianism and surveillance.",
    },

    {
      id: 28,
      name: "Wireless Earbuds",
      slug: "wireless-earbuds",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2022/10/31/14/26/earphones-7559937_640.jpg",
      alt: "Wireless earbuds",
      price: 89.99,
      brand: "JBL",
      rating: 4.3,
      numReviews: 180,
      countInStock: 25,
      description:
        "True wireless earbuds with excellent sound quality and long battery life.",
    },

    {
      id: 29,
      name: "Hooded Sweatshirt",
      slug: "hooded-sweatshirt",
      category: "Clothing",
      image:
        "https://cdn02.plentymarkets.com/ioezt853w1wg/item/images/1411/full/urban-classics-kapuzen-sweatshirt-uebergroesse-anthrazit-1411.jpg",
      alt: "Hooded sweatshirt",
      price: 49.99,
      brand: "Nike",
      rating: 4.6,
      numReviews: 150,
      countInStock: 15,
      description:
        "A comfortable and trendy hooded sweatshirt for a casual sporty look.",
    },

    {
      id: 30,
      name: "Pride and Prejudice",
      slug: "pride-and-prejudice",
      category: "Books",
      image:
        "https://images.saymedia-content.com/.image/t_share/MTc5ODE1MjQ3MjI0MjUyMDE1/movie-review-pride-and-prejudice-by-jane-austen.jpg",
      alt: "Pride and Prejudice book",
      price: 11.99,
      brand: "Penguin Books",
      rating: 4.8,
      numReviews: 250,
      countInStock: 5,
      description:
        "Jane Austen's beloved novel exploring love, class, and societal norms.",
    },

    {
      id: 31,
      name: "Gaming Console",
      slug: "gaming-console",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/18/17/video-game-console-2202660_640.jpg",
      alt: "Gaming console",
      price: 399.99,
      brand: "Sony",
      rating: 4.9,
      numReviews: 350,
      countInStock: 8,
      description:
        "A powerful gaming console for immersive gaming experiences.",
    },

    {
      id: 32,
      name: "Sunglasses",
      slug: "sunglasses",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_640.jpg",
      alt: "Sunglasses",
      price: 29.99,
      brand: "Ray-Ban",
      rating: 4.7,
      numReviews: 120,
      countInStock: 20,
      description:
        "Stylish sunglasses that provide both UV protection and a fashionable look.",
    },

    {
      id: 33,
      name: "The Catcher in the Rye",
      slug: "the-catcher-in-the-rye",
      category: "Books",
      image:
        "https://sothebys-md.brightspotcdn.com/dims4/default/1e04ae5/2147483647/strip/true/crop/2000x2000+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fea%2F4c%2F8bf4e9334ee0b9a64e96df9a5e32%2Fl22404-c9kvw-1.jpg",
      alt: "The Catcher in the Rye book",
      price: 13.99,
      brand: "Little, Brown and Company",
      rating: 4.5,
      numReviews: 200,
      countInStock: 10,
      description:
        "J.D. Salinger's iconic novel depicting teenage angst and rebellion.",
    },

    {
      id: 34,
      name: "Laptop",
      slug: "laptop",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg",
      alt: "Laptop",
      price: 1299.99,
      brand: "Dell",
      rating: 4.6,
      numReviews: 280,
      countInStock: 15,
      description:
        "A high-performance laptop for productivity, gaming, and entertainment.",
    },

    {
      id: 35,
      name: "Leather Belt",
      slug: "leather-belt",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2012/09/04/21/16/belts-56093_640.jpg",
      alt: "Leather belt",
      price: 39.99,
      brand: "Gucci",
      rating: 4.8,
      numReviews: 90,
      countInStock: 25,
      description:
        "A stylish leather belt that adds a touch of sophistication to any outfit.",
    },

    {
      id: 36,
      name: "The Alchemist",
      slug: "the-alchemist",
      category: "Books",
      image:
        "https://miro.medium.com/v2/resize:fit:510/1*7UzsrkGlocuNkF1qo3JU5A.png",
      alt: "The Alchemist book",
      price: 9.99,
      brand: "HarperOne",
      rating: 4.7,
      numReviews: 400,
      countInStock: 6,
      description:
        "Paulo Coelho's inspirational novel about following one's dreams and destiny.",
    },

    {
      id: 37,
      name: "Wireless Speaker",
      slug: "wireless-speaker",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg",
      alt: "Wireless speaker",
      price: 149.99,
      brand: "Sonos",
      rating: 4.5,
      numReviews: 190,
      countInStock: 20,
      description:
        "A portable wireless speaker with exceptional sound quality.",
    },

    {
      id: 38,
      name: "Running Shoes",
      slug: "running-shoes",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2015/11/05/22/33/sneakers-1024979_640.jpg",
      alt: "Running shoes",
      price: 79.99,
      brand: "Nike",
      rating: 4.9,
      numReviews: 150,
      countInStock: 30,
      description:
        "High-performance running shoes designed for comfort and support.",
    },

    {
      id: 39,
      name: "The Hobbit",
      slug: "the-hobbit",
      category: "Books",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXU4b9jA75WuJa_gKsQ8aNf66Jk-4IkW4ng&usqp=CAU",
      alt: "The Hobbit book",
      price: 15.99,
      brand: "Houghton Mifflin Harcourt",
      rating: 4.8,
      numReviews: 350,
      countInStock: 4,
      description:
        "J.R.R. Tolkien's enchanting prequel to The Lord of the Rings.",
    },

    {
      id: 40,
      name: "Smart Watch",
      slug: "smart-watch",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_640.jpg",
      alt: "Smart watch",
      price: 199.99,
      brand: "Samsung",
      rating: 4.4,
      numReviews: 220,
      countInStock: 12,
      description:
        "A feature-packed smart watch for tracking fitness and staying connected.",
    },

    {
      id: 41,
      name: "Casual Shirt",
      slug: "casual-shirt",
      category: "Clothing",
      image: "/images/shirt1.jpg",
      alt: "Casual shirt",
      price: 34.99,
      brand: "Tommy Hilfiger",
      rating: 4.3,
      numReviews: 100,
      countInStock: 20,
      description:
        "A comfortable and versatile casual shirt for everyday wear.",
    },

    {
      id: 42,
      name: "Brave New World",
      slug: "brave-new-world",
      category: "Books",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bfffaf13630039.562761884989f.jpg",
      alt: "Brave New World book",
      price: 12.99,
      brand: "HarperPerennial",
      rating: 4.6,
      numReviews: 180,
      countInStock: 8,
      description:
        "A dystopian novel by Aldous Huxley depicting a totalitarian society.",
    },

    {
      id: 43,
      name: "Bluetooth Earphones",
      slug: "bluetooth-earphones",
      category: "Electronics",
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2022/05/bluetoothheadphones-2048px-1136.jpg",
      alt: "Bluetooth earphones",
      price: 59.99,
      brand: "Jabra",
      rating: 4.2,
      numReviews: 150,
      countInStock: 25,
      description:
        "Wireless earphones with superior sound quality and long battery life.",
    },

    {
      id: 44,
      name: "Denim Jeans",
      slug: "denim-jeans",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_640.jpg",
      alt: "Denim jeans",
      price: 49.99,
      brand: "Levi's",
      rating: 4.7,
      numReviews: 120,
      countInStock: 15,
      description:
        "Classic denim jeans with a comfortable fit and timeless style.",
    },

    {
      id: 45,
      name: "The Da Vinci Code",
      slug: "the-da-vinci-code",
      category: "Books",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_af7189eb-efab-4b43-8065-892e0bcbd014?wid=488&hei=488&fmt=pjpeg",
      alt: "The Da Vinci Code book",
      price: 13.99,
      brand: "Anchor",
      rating: 4.5,
      numReviews: 200,
      countInStock: 10,
      description:
        "Dan Brown's gripping thriller involving secret societies and hidden codes.",
    },

    {
      id: 46,
      name: "Tablet",
      slug: "tablet",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2015/01/18/13/31/tablet-602968_640.jpg",
      alt: "Tablet",
      price: 499.99,
      brand: "Apple",
      rating: 4.8,
      numReviews: 280,
      countInStock: 15,
      description:
        "A versatile tablet for productivity, entertainment, and creativity.",
    },

    {
      id: 47,
      name: "Winter Coat",
      slug: "winter-coat",
      category: "Clothing",
      image:
        "https://cdn.shopify.com/s/files/1/0347/3225/articles/PeaCoat.jpg?v=1485614004",
      alt: "Winter coat",
      price: 89.99,
      brand: "The North Face",
      rating: 4.6,
      numReviews: 150,
      countInStock: 12,
      description:
        "A warm and stylish winter coat to keep you cozy in cold weather.",
    },

    {
      id: 48,
      name: "The Hunger Games",
      slug: "the-hunger-games",
      category: "Books",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOwoBK-JILGv0P3mPmAL4iNYW_xQxlgH74A&usqp=CAU",
      alt: "The Hunger Games book",
      price: 9.99,
      brand: "Scholastic",
      rating: 4.7,
      numReviews: 400,
      countInStock: 6,
      description:
        "Suzanne Collins' thrilling dystopian novel set in a post-apocalyptic society.",
    },

    {
      id: 49,
      name: "Wireless Mouse",
      slug: "wireless-mouse",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2017/01/22/10/11/mouse-1999470_640.jpg",
      alt: "Wireless mouse",
      price: 29.99,
      brand: "Logitech",
      rating: 4.5,
      numReviews: 190,
      countInStock: 20,
      description:
        "A reliable wireless mouse for precise control and comfortable use.",
    },

    {
      id: 50,
      name: "Tennis Shoes",
      slug: "tennis-shoes",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2018/07/24/01/18/tennis-3558261_640.jpg",
      alt: "Tennis shoes",
      price: 69.99,
      brand: "Adidas",
      rating: 4.9,
      numReviews: 150,
      countInStock: 30,
      description:
        "Durable and supportive tennis shoes for sports and athletic activities.",
    },

    {
      id: 51,
      name: "The Chronicles of Narnia",
      slug: "the-chronicles-of-narnia",
      category: "Books",
      image:
        "https://i.pinimg.com/originals/30/a9/ce/30a9ce2c1ef652b470a32a2d03d3b2ca.jpg",
      alt: "The Chronicles of Narnia book",
      price: 19.99,
      brand: "HarperCollins",
      rating: 4.8,
      numReviews: 350,
      countInStock: 4,
      description:
        "C.S. Lewis' beloved fantasy series set in the magical world of Narnia.",
    },

    {
      id: 52,
      name: "Digital Camera",
      slug: "digital-camera",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2017/08/28/19/00/camera-2690909_640.png",
      alt: "Digital camera",
      price: 599.99,
      brand: "Canon",
      rating: 4.4,
      numReviews: 220,
      countInStock: 12,
      description:
        "A high-quality digital camera for capturing stunning photos and videos.",
    },

    {
      id: 53,
      name: "Knit Sweater",
      slug: "knit-sweater",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2018/11/22/12/48/clothing-3831823_640.jpg",
      alt: "Knit sweater",
      price: 59.99,
      brand: "H&M",
      rating: 4.3,
      numReviews: 100,
      countInStock: 20,
      description: "A cozy and stylish knit sweater for chilly days.",
    },
    {
      id: 54,
      name: "Headphones",
      slug: "headphones",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/17/25/sony-2202301_640.jpg",
      alt: "Headphones",
      price: 149.99,
      brand: "Bose",
      rating: 4.2,
      numReviews: 150,
      countInStock: 25,
      description:
        "High-quality headphones with immersive sound and noise-canceling technology.",
    },

    {
      id: 55,
      name: "Formal Dress",
      slug: "formal-dress",
      category: "Clothing",
      image:
        "https://cdn.shopify.com/s/files/1/0624/2382/6609/products/forest-gre-dress-PG-22-F2236-b.jpg?v=1664920818",
      alt: "Formal dress",
      price: 99.99,
      brand: "Ralph Lauren",
      rating: 4.7,
      numReviews: 120,
      countInStock: 15,
      description:
        "An elegant and sophisticated formal dress for special occasions.",
    },

    {
      id: 56,
      name: "Smart TV",
      slug: "smart-very-tv",
      category: "Electronics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y7LJOyxZnmfsx7s6WIrqjwXeOvsMG6w32p4cVk72k94RsP-v8mrd_6AbKlF4SWJMp0U&usqp=CAU",
      alt: "Smart TV",
      price: 999.99,
      brand: "Samsung",
      rating: 4.8,
      numReviews: 280,
      countInStock: 15,
      description:
        "A feature-rich smart TV with a vibrant display and streaming capabilities.",
    },

    {
      id: 57,
      name: "Swimwear",
      slug: "swimwear",
      category: "Clothing",
      image:
        "https://down-sg.img.susercontent.com/file/5ff2709aed7f744a653028276dc538f7_tn",
      alt: "Swimwear",
      price: 49.99,
      brand: "Speedo",
      rating: 4.6,
      numReviews: 150,
      countInStock: 12,
      description:
        "Stylish and comfortable swimwear for beach and pool activities.",
    },

    {
      id: 58,
      name: "Wireless Keyboard",
      slug: "wireless-keyboard",
      category: "Electronics",
      image:
        "https://cdn.pixabay.com/photo/2015/12/03/16/49/keyboard-1075248_640.jpg",
      alt: "Wireless keyboard",
      price: 49.99,
      brand: "Logitech",
      rating: 4.5,
      numReviews: 190,
      countInStock: 20,
      description:
        "A sleek and responsive wireless keyboard for comfortable typing.",
    },

    {
      id: 59,
      name: "Hoodie",
      slug: "hoodie",
      category: "Clothing",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVbgMp9RLCjpV3ulvyxlDmn4S28Jyplf6sA&usqp=CAU",
      alt: "Hoodie",
      price: 39.99,
      brand: "Nike",
      rating: 4.9,
      numReviews: 150,
      countInStock: 30,
      description: "A cozy and stylish hoodie for casual and sporty looks.",
    },

    {
      id: 60,
      name: "Portable Charger",
      slug: "portable-charger",
      category: "Electronics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblyByDz9vgoq2bnbFGlVIeT9U4uvVBbshSA&usqp=CAU",
      alt: "Portable charger",
      price: 29.99,
      brand: "Anker",
      rating: 4.4,
      numReviews: 220,
      countInStock: 12,
      description:
        "A compact and high-capacity portable charger for charging devices on the go.",
    },

    {
      id: 61,
      name: "Sweatpants",
      slug: "sweatpants",
      category: "Clothing",
      image:
        "https://cdn.pixabay.com/photo/2020/05/15/10/20/sweatpants-5173125_640.jpg",
      alt: "Sweatpants",
      price: 29.99,
      brand: "Champion",
      rating: 4.3,
      numReviews: 100,
      countInStock: 20,
      description:
        "Comfortable and relaxed sweatpants for lounging or casual activities.",
    },
  ],
};

export default data;
