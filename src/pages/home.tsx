import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Menu from "../components/menu";
import { Product } from "../contexts/cart";

const Home = ({ items, setItems }: { items: Product[], setItems: (items: Product[]) => void }) => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Menu items={items} setItems={setItems}/>
        </div>
    )
}

export default Home;