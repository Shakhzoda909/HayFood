import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Menu from "../components/menu";
import ServiceType from "../components/service-type";

import { useToast } from "@/hooks/use-toast";


const Home = () => {
    const { toast } = useToast()
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