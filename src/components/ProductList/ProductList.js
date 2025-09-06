import React, { useState } from 'react';
import Product from './common/Product';
import './Product.css';

// ✅ Product list with categories
export const products = [
  // 🚲 Bikes
  { id: 1, name: 'Dutch Cruiser', description: 'A classic bike with a retro feel.', seller: 'John Doe', location: 'Amsterdam', condition: 'Good', price: 120, image: '/images/bikes/bike-01.jpg', category: 'Bikes' },
  { id: 2, name: 'City Commuter', description: 'Ideal for daily commutes.', seller: 'Jane Smith', location: 'Utrecht', condition: 'Very Good', price: 150, image: '/images/bikes/bike-02.jpg', category: 'Bikes' },
  { id: 3, name: 'Retro Town', description: 'Stylish and comfortable.', seller: 'Alice Johnson', location: 'Rotterdam', condition: 'Excellent', price: 180, image: '/images/bikes/bike-03.jpg', category: 'Bikes' },
  { id: 10, name: 'Mountain Rider', description: 'Perfect for off-road adventures.', seller: 'Max Biker', location: 'Shimla', condition: 'Like New', price: 250, image: '/images/bikes/bike-04.jpg', category: 'Bikes' },

  // 🍎 Fruits
  { id: 4, name: 'Fresh Apples', description: 'Crisp and juicy apples.', seller: 'Farm Fresh', location: 'Himachal', condition: 'Fresh', price: 80, image: '/images/fruits/apple.jpg', category: 'Fruits' },
  { id: 5, name: 'Organic Bananas', description: 'Sweet and ripe bananas.', seller: 'Local Farm', location: 'Kerala', condition: 'Fresh', price: 60, image: '/images/fruits/banana.jpg', category: 'Fruits' },
  { id: 11, name: 'Mangoes', description: 'Sweet Alphonso mangoes.', seller: 'Tropical Farms', location: 'Ratnagiri', condition: 'Fresh', price: 120, image: '/images/fruits/mango.jpg', category: 'Fruits' },
  { id: 12, name: 'Grapes', description: 'Seedless black grapes.', seller: 'Vineyard', location: 'Nashik', condition: 'Fresh', price: 90, image: '/images/fruits/grapes.jpg', category: 'Fruits' },

  // 🥕 Vegetables
  { id: 6, name: 'Tomatoes', description: 'Perfect for salads and cooking.', seller: 'GreenMart', location: 'Pune', condition: 'Fresh', price: 40, image: '/images/vegetables/tomato.jpg', category: 'Vegetables' },
  { id: 7, name: 'Carrots', description: 'Crunchy organic carrots.', seller: 'Farm to Home', location: 'Bangalore', condition: 'Fresh', price: 50, image: '/images/vegetables/carrot.jpg', category: 'Vegetables' },
  { id: 13, name: 'Onions', description: 'Fresh red onions.', seller: 'VeggieMart', location: 'Nashik', condition: 'Fresh', price: 35, image: '/images/vegetables/onion.jpg', category: 'Vegetables' },
  { id: 14, name: 'Potatoes', description: 'Farm fresh potatoes.', seller: 'AgriWorld', location: 'Indore', condition: 'Fresh', price: 45, image: '/images/vegetables/potato.jpg', category: 'Vegetables' },

  // 👕 Clothes
  { id: 8, name: 'T-Shirt', description: 'Comfortable cotton T-shirt.', seller: 'ClothHub', location: 'Delhi', condition: 'New', price: 300, image: '/images/clothes/tshirt.jpg', category: 'Clothes' },
  { id: 9, name: 'Jeans', description: 'Stylish blue jeans.', seller: 'FashionStore', location: 'Mumbai', condition: 'New', price: 900, image: '/images/clothes/jeans.jpg', category: 'Clothes' },
  { id: 15, name: 'Jacket', description: 'Warm winter jacket.', seller: 'WinterWear', location: 'Manali', condition: 'New', price: 1500, image: '/images/clothes/jacket.jpg', category: 'Clothes' },
  { id: 16, name: 'Kurti', description: 'Trendy cotton kurti.', seller: 'EthnicMart', location: 'Jaipur', condition: 'New', price: 700, image: '/images/clothes/kurti.jpg', category: 'Clothes' },

  // 📱 Electronics
  { id: 17, name: 'Smartphone', description: 'Latest Android smartphone.', seller: 'ElectroWorld', location: 'Bangalore', condition: 'New', price: 15000, image: '/images/electronics/phone.jpg', category: 'Electronics' },
  { id: 18, name: 'Laptop', description: 'Lightweight laptop for work.', seller: 'TechHub', location: 'Chennai', condition: 'Like New', price: 45000, image: '/images/electronics/laptop.jpg', category: 'Electronics' },
  { id: 19, name: 'Headphones', description: 'Noise-cancelling headphones.', seller: 'SoundGear', location: 'Delhi', condition: 'New', price: 2500, image: '/images/electronics/headphones.jpg', category: 'Electronics' },

  // 📚 Books
  { id: 20, name: 'JavaScript Guide', description: 'Learn JavaScript from scratch.', seller: 'BookStore', location: 'Online', condition: 'New', price: 500, image: '/images/books/js.jpg', category: 'Books' },
  { id: 21, name: 'Data Structures', description: 'Master DSA concepts.', seller: 'BookStore', location: 'Online', condition: 'New', price: 700, image: '/images/books/dsa.jpg', category: 'Books' },

  // 🛋️ Furniture
  { id: 22, name: 'Sofa Set', description: 'Comfortable 3-seater sofa.', seller: 'FurniMart', location: 'Hyderabad', condition: 'Like New', price: 12000, image: '/images/furniture/sofa.jpg', category: 'Furniture' },
  { id: 23, name: 'Dining Table', description: 'Wooden dining table.', seller: 'HomeStyle', location: 'Chennai', condition: 'New', price: 8000, image: '/images/furniture/table.jpg', category: 'Furniture' },
];

// ✅ Category list with representative images
const categories = [
  { name: 'Bikes', image: '/images/categories/bikes.jpg' },
  { name: 'Fruits', image: '/images/categories/fruits.jpg' },
  { name: 'Vegetables', image: '/images/categories/vegetables.jpg' },
  { name: 'Clothes', image: '/images/categories/clothes.jpg' },
  { name: 'Electronics', image: '/images/categories/electronics.jpg' },
  { name: 'Books', image: '/images/categories/books.jpg' },
  { name: 'Furniture', image: '/images/categories/furniture.jpg' },
];

function ProductList({ addToCart, searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ Filter products based on search + category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container my-5">
      {/* Category Section */}
      {!selectedCategory && (
        <>
          <h3 className="mb-4 text-center">🛍️ Browse Categories</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {categories.map((cat) => (
              <div className="col" key={cat.name}>
                <div
                  className="card h-100 category-card shadow-sm"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <img src={cat.image} className="card-img-top" alt={cat.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cat.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Products Section */}
      {selectedCategory && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>{selectedCategory}</h3>
            <button className="btn btn-outline-secondary" onClick={() => setSelectedCategory(null)}>
              ⬅ Back to Categories
            </button>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col">
                <Product product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
