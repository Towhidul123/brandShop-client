import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';

const Cart = () => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addToCart')
            .then(res => res.json())
            .then(data => setCard(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    card.map(card => <CartCard key={card._id} card={card}></CartCard>)
                }


            </div>


        </div>
    );
};

export default Cart;