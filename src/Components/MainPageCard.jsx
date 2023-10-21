import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import BrandCard from "./BrandCard";

const MainPageCard = () => {

    // const card = useLoaderData();
    // console.log(card);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-zeta-eight.vercel.app/mainPageProduct')
            .then(res => res.json())
            .then(data => setCard(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (

        <div>
            <h2 className="font-semibold text-4xl my-8 text-center">Types of car we have</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    card.map(card => <BrandCard key={card._id} card={card}></BrandCard>)
                }

            </div>
        </div>
    );
};

export default MainPageCard;