import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartCard = ({ card }) => {

    const { _id, name, BrandName, Type, Price, ShortDescription, rating, image } = card;

    const handleDelete = _id => {
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

                fetch(`http://localhost:5000/addToCart/${_id}`,{
                    method:'DELETE'
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
        <div>

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

                            <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartCard;