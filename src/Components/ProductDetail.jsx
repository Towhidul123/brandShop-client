import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  

  useEffect(() => {
    console.log('Fetching data for productId:', productId);
    fetch(`https://brand-shop-server-zeta-eight.vercel.app/product/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const{ name, BrandName, Type, Price, ShortDescription, LongDescription, rating, image} = product;
  const productCart = {name, BrandName, Type, Price, ShortDescription, LongDescription, rating, image}

  console.log(product);
  console.log(productCart);


  const handleAddToCart = () => {
    fetch("https://brand-shop-server-zeta-eight.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productCart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Successfully Added!');
        }
      });
  };



  return (
    <div>
      {/* <h1>{product.name}</h1> */}
      <Toaster position="top-right" reverseOrder={false}
            />

      <div className="flex flex-col items-center justify-center object-center ">
        <div className="  h-48 overflow-hidden rounded-xl ">
          <img className="aspect-square w-full md:w-[200px] object-cover rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none " src={product.image} alt="" />
        </div>
        <div className=" flex w-full rounded-xl  ">

          <div className="flex flex-col justify-center items-center md:items-start gap-y-1 p-4">


            <p className="block text-xl font-normal">
              {product.LongDescription}
            </p>

          </div>


        </div>

        
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        


      </div>





    </div>
  );
};

export default ProductDetail;
