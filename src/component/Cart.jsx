import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { productsData } from "../assets";


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(productsData.map(product => ({ ...product, quantity: 1 })));

  const toggleDrawer = () => setIsOpen(!isOpen);
  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative">
      {/* Shopping Bag Icon */}
      <button onClick={toggleDrawer}>
        <ShoppingBag className="h-5 w-5 mt-1" />
      </button>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 w-80 z-50 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button onClick={toggleDrawer} className="text-gray-500 hover:text-black">✖</button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-150px)]">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="px-3">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal & Checkout */}
        <div className="p-4 border-t">
          <p className="font-semibold text-lg">Total: ${subTotal}</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600">Go to shopping cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
