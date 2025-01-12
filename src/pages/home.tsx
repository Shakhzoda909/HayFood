import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Menu from "../components/menu";
import ServiceType from "../components/service-type";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <ServiceType />
            <Menu />
        </div>
    )
}

export default Home;