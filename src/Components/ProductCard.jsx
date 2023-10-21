import { Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, image, name, BrandName, Type, Price, rating } = product;

 

    return (

       
        
        <div className="flex justify-center items-center mt-8 ">
         

            <div className="relative flex flex-col text-gray-700 bg-blue-gray-100 shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative h-56  mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">
                    <img className="product-image h-full w-full object-cover" src={image} alt={name} />
                </div>
                <div className="p-4">
                    <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h5>
                    <p className="block  text-base antialiased font-light leading-relaxed text-inherit">
                       Brand: {BrandName}
                    </p>
                </div>
                <div className="p-4">
                    <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Type:  {Type}
                    </h5>
                    <p className="block  text-base antialiased font-light leading-relaxed text-inherit">
                        ${Price}
                    </p>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    <Rating name="rating" value={rating} readonly />
                    </p>
                </div>



                <div className="p-6 pt-0 flex justify-between">
                <Link to={`/update/${_id}`}>
                    <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Update
                    </button>
                    </Link>

                    <Link to={`/product/${_id}`}>
                        <button
                            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Details
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default ProductCard;
