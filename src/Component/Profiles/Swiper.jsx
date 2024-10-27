import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CardSwiper = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const cards = [
        { id: 1, title: 'Card 1', description: 'This is the first card' },
        { id: 2, title: 'Card 2', description: 'This is the second card' },
        { id: 3, title: 'Card 3', description: 'This is the third card' },
        { id: 4, title: 'Card 4', description: 'This is the fourth card' },
        { id: 5, title: 'Card 5', description: 'This is the fifth card' },
    ];

    return (
        <>

            <div className='className="slider-container" w-full h-full'>

                <Slider {...settings}>
                    {cards.map(card => (

                        <div className="card  max-w-[350px] min-h-48 text-center bg-blue-600 p-2 rounded-xl flex items-center justify-center h-full" key={card.id}>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>

                    ))
                    }
                </Slider>
            </div>
        </>
    );
};

export default CardSwiper;