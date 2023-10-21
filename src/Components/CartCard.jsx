import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartCard = ({ card }) => {

    const { _id, name, BrandName, Type, Price, ShortDescription, rating, image } = card;

    const handleDelete = _id => {
        console.log(card);
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-zeta-eight.vercel.app/addToCart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (

        <div className='flex justify-center items-center p-10' >
            <div className=" flex flex-col text-gray-700 bg-blue-gray-100 shadow-md w-96 rounded-xl bg-clip-border" data-aos="zoom-in" >
                <div className="flex items-center justify-center">
                    <div className="relative flex w-[312px] flex-col rounded-xl  ">
                        <div className="relative  h-48 overflow-hidden rounded-xl ">
                            <img className="aspect-video h-full w-full object-cover rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none " src={image} alt="" />
                            {/* <img className="object-cover w-full h-full " src={image} alt="" /> */}
                        </div>


                        <div className="py-4">
                            <h5 className="block mb-2 text-center text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {name}
                            </h5>

                        </div>

                        <div className="">

                            <button onClick={() => handleDelete(_id)} className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true">Delete</button>

                        </div>


                    </div>
                </div>



            </div>

        </div>
    );
};

export default CartCard;