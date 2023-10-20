import Aos from "./Aos";
import Banner from "./Banner";
import BrandCard from "./BrandCard";
import Footer from "./Footer";
import MainPageCard from "./MainPageCard";
import Member from "./Member";


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <div className="container mx-auto m-0 p-0">
               <MainPageCard></MainPageCard>
               <Aos></Aos>
               <Member></Member>
               </div>
              
            <Footer></Footer>
          
        </div>
    );
};

export default Home;