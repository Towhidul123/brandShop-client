import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import BrandCard from "./BrandCard";

const MainPageCard = () => {

    // const card = useLoaderData();
    // console.log(card);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/mainPageProduct')
          .then(res => res.json())
          .then(data => setCard(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    card.map(card =><BrandCard key={card._id} card ={card}></BrandCard>)
                }

            
        </div>
    );
};

export default MainPageCard;