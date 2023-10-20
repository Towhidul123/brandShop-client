import { ParallaxBanner } from "react-scroll-parallax";

const Banner = () => {
    return (
        <div className="relative">
            <ParallaxBanner
                layers={[
                    { image: 'https://i.ibb.co/C7Yzx7L/olav-tvedt-yq-ef-MJMu-Pg-unsplash-1.jpg', speed: -20 },
                    { image: 'https://i.ibb.co/C7Yzx7L/olav-tvedt-yq-ef-MJMu-Pg-unsplash-1.jpg', speed: -10 },
                ]}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-center text-5xl text-white font-thin">Drive in Style <br /> with <br />GrabCar</h1>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default Banner;
