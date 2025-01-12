import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  badges?: string[];
  image: string;
  quantity?: number;
}

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const savedItems = localStorage.getItem('cartItems');
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });

  const addToCart = (product: Product) => {
    setItems(prevItems => {
      const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
      
      let newItems;
      if (existingProductIndex >= 0) {
        // Create a new array with the updated product
        newItems = [...prevItems];
        newItems[existingProductIndex] = {
          ...prevItems[existingProductIndex],
          quantity: (prevItems[existingProductIndex].quantity || 0) + 1
        };
      } else {
        // Add new product with quantity 1
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prevItems => {
      const existingProductIndex = prevItems.findIndex(item => item.id === productId);
      
      if (existingProductIndex === -1) {
        return prevItems;
      }

      const newItems = [...prevItems];
      const currentQuantity = prevItems[existingProductIndex].quantity || 0;

      if (currentQuantity <= 1) {
        // Remove the item completely if quantity will be 0
        newItems.splice(existingProductIndex, 1);
      } else {
        // Decrease the quantity by 1
        newItems[existingProductIndex] = {
          ...prevItems[existingProductIndex],
          quantity: currentQuantity - 1
        };
      }
      
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}