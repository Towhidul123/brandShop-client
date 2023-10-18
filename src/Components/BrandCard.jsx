

const BrandCard = () => {
    return (
        <div>

            <div className="flex  items-center justify-center object-center ">

                <div className="relative flex w-[312px] flex-col rounded-xl  ">
                    <div className="relative  h-48 overflow-hidden rounded-xl ">
                        <img className="object-cover w-full h-full " src={img} alt="" />
                    </div>
                    

                    <div>
                        <p className="block text-lg font-semibold  ">
                          
                        </p>
                    </div>

{/* 
                    <div className="mt-auto">
                        <NavLink to={`/card/${id}`}>    <button className="btn btn-primary">Details</button></NavLink>

                    </div> */}

                </div>

            </div>



        </div>
    );
};

export default BrandCard;