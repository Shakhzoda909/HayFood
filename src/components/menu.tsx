import { MinusCircle, PlusCircle } from "lucide-react";
import { menuData } from "../constants/menu";
import { useCart } from "../contexts/cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../contexts/cart";

const Menu = ({items, setItems}: {items: Product[], setItems: (items: Product[]) => void}) => {
    const navigate = useNavigate();
    // const { addToCart, removeFromCart, items } = useCart();

    const [activeCategory, setActiveCategory] = useState(menuData[0].id);

    const addToCart = (product: Product) => {
        setItems([...items, product]);
      };
    
      const removeFromCart = (productId: number) => {
        setItems(items.filter(item => item.id !== productId));
      };

    return (
        <div>
            <div className= "flex justify-between items-center px-[20px] py-[10px] sticky top-0 bg-white z-10 " >
                <div className="flex gap-[10px] ">
                    {menuData.map((item) => (
                        <span 
                            key={item.id}
                            className={`px-[20px] py-[5px] bg-[#f4f4f4] rounded-[100px] ${activeCategory === item.id ? 'bg-lightgreen text-white' : ''} cursor-pointer hover:bg-[var(--lightgreen-opacity)] hover:text-white`}
                            onClick={() => setActiveCategory(item.id)}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
                <button onClick={() => navigate('/cart')} className="bg-lightgreen text-white px-[20px] py-[10px] rounded-[10px]">
                    Savatcha | {items.length}
                </button>
            </div>
            <div className="max-w-[1200px] mx-auto mb-[100px]">
                {menuData.map((category) => (
                    <div key={category.id} className="mb-[40px]">
                        <p className="text-[20px] font-bold">{category.name}</p>
                        <div className="grid grid-cols-4 gap-[20px]">
                            {category.items.map((product) => (
                                <div key={product.id} className="relative bg-white p-[20px] rounded-[16px] drop-shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
                                    <img className="w-full h-[200px] object-cover" src={"https://i.pinimg.com/474x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg"} alt="" />
                                    <p className="text-[16px] font-bold mt-[10px]">{product.name}</p>
                                    <p className="text-[14px] text-[#808080]">{product.description}</p>
                                    <p className="text-[16px] font-bold mt-[10px]">{product.price}$</p>
                                    <div className="absolute top-[8px] right-[8px] space-x-[10px]">
                                        {product.badges?.map((badge) => (
                                            <span className="px-[10px] py-[5px] bg-[var(--lightgreen)] text-white rounded-[100px]">{badge}</span>
                                        ))}
                                    </div>
                                    {items.some(item => item.id === product.id) ? (
                                        <button
                                            onClick={() => removeFromCart(product.id)}
                                            className="bg-red-500 text-white px-[20px] py-[10px] rounded-[10px] absolute bottom-[8px] right-[8px]"
                                        >
                                            Savatdan o'chirish
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-lightgreen text-white px-[20px] py-[10px] rounded-[10px] absolute bottom-[8px] right-[8px]"
                                        >
                                            Savatga qo'shish
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;