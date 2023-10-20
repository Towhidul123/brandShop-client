import { Link } from "react-router-dom";


const BrandCard = ({ card }) => {

    const { name, BrandName, Type, Price, ShortDescription, rating, image } = card;



    return (
        <div>
            <div className="flex items-center justify-center object-center ">
                <div className="relative flex w-[312px] flex-col rounded-xl  ">
                    <div className="relative  h-48 overflow-hidden rounded-xl ">
                        <img className="object-cover w-full h-full " src={image} alt="" />
                    </div>

                    <div>
                        <p className="block text-lg font-semibold  ">
                            {name}
                        </p>
                    </div>

                    <div className="mt-auto">
                        <Link to={`/products/${name}`}>
                            <button className="btn btn-primary">View Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;