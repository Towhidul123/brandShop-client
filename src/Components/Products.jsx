import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Products = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const { brandName } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(brandName);
        fetch(`http://localhost:5000/products/${brandName}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [brandName]);
    

    return (

        <div className="relative product-list ">

            <div className='flex justify-center w-full aspect-video max-h-[600px] py-5'>
                <AutoplaySlider 
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                >
                    <div data-src="https://i.ibb.co/GtwSB5z/ildar-garifullin-u-X4-Bjke-x-UE-unsplash.jpg" />
                    <div data-src="https://i.ibb.co/BNFg60g/tim-meyer-GIm7wxi-AZys-unsplash.jpg" />
                    <div data-src="https://i.ibb.co/kqXrTwp/tyler-clemmensen-yxy-Iwykexwg-unsplash.jpg" />
                </AutoplaySlider>
            </div>

          



            <h1 className='text-center my-8 text-lg font-semibold'>Products <br /> for <br />{brandName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;