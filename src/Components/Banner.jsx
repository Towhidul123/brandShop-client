import { ParallaxBanner } from "react-scroll-parallax";

const Banner = () => {
    return (
        <div>
            <ParallaxBanner
                layers={[
                    { image: '/src/assets/Audi-banner.jpg', speed: -20 },
                    { image: '/src/assets/Audi-banner.jpg', speed: -10 },
                ]}
                className="aspect-[2/1]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default Banner;
