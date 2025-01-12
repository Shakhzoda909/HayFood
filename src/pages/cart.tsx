import { useCart } from "../contexts/cart";
import { Product } from "../contexts/cart";

const Cart = ({items, setItems}: {items: Product[], setItems: (items: Product[]) => void}) => {
    // const { items } = useCart();
    
    return (
        <div>
            <h1>Savatcha</h1>
            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default Cart;