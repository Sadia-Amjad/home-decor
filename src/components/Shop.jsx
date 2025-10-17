import React, { useState, useEffect } from "react";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.avif";
import card5 from "../assets/card5.jpg";
import card6 from "../assets/card6.jpg";
import card7 from "../assets/card7.jpg";
import card8 from "../assets/card8.jpg";
import card9 from "../assets/card9.avif";
import card10 from "../assets/card10.jpg";
import card11 from "../assets/card11.jpg";
import card12 from "../assets/card12.jpg";

function Shop() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const products = [
    { id: 1, name: "Elegant Sofa Set", desc: "A cozy modern sofa perfect for your living room.", price: 799, img: card1 },
    { id: 2, name: "Minimalist Coffee Table", desc: "Sleek wooden coffee table with a natural finish.", price: 299, img: card2 },
    { id: 3, name: "Modern Floor Lamp", desc: "Stylish lamp to brighten your evenings.", price: 149, img: card3 },
    { id: 4, name: "Luxury Bed Frame", desc: "Comfort meets elegance with our premium bed design.", price: 999, img: card4 },
    { id: 5, name: "Classic Dining Set", desc: "Elegant wooden dining table with four chairs.", price: 899, img: card5 },
    { id: 6, name: "Velvet Armchair", desc: "Soft velvet armchair for reading and relaxation.", price: 349, img: card6 },
    { id: 7, name: "Wall Art Collection", desc: "Add a modern touch to your home walls.", price: 199, img: card7 },
    { id: 8, name: "Marble Coffee Table", desc: "Luxurious marble finish for a sophisticated look.", price: 449, img: card8 },
    { id: 9, name: "Cozy Throw Blanket", desc: "Soft woven throw to add warmth and style.", price: 59, img: card9 },
    { id: 10, name: "Indoor Plant Pot", desc: "Elegant ceramic pot for indoor plants.", price: 39, img: card10 },
    { id: 11, name: "Decorative Vase Set", desc: "A pair of artistic vases to enhance your decor.", price: 89, img: card11 },
    { id: 12, name: "Modern Bookshelf", desc: "Spacious and minimal bookshelf for your living room.", price: 599, img: card12 },
  ];

  // Add item to cart or increase quantity
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Checkout handler
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <section className="bg-[#fefcf9] py-20 px-[8%]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Explore Our Collection
        </h2>
        <p className="text-gray-600 text-lg">
          Elegant furniture & décor to elevate your home.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-6 text-center flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <p className="text-[#a67c52] font-bold mb-4">${item.price}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="bg-[#a67c52] text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-[#8b6a43] transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Display */}
      {cart.length > 0 && (
        <div className="mt-20 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🛒 Your Cart ({cart.length} items)
          </h3>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-wrap justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-gray-700 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#a67c52]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total & Checkout */}
          <div className="text-right mt-6 border-t pt-4">
            <h4 className="text-xl font-semibold text-gray-800">
              Total: <span className="text-[#a67c52]">${total.toFixed(2)}</span>
            </h4>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-[#a67c52] text-white py-2 px-8 rounded-full font-semibold hover:bg-[#8b6a43] transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Shop;
