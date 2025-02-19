/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './Heroarea.css';
import React, { useState, useEffect } from 'react';
import image from './TV.png';

const Heroarea = () => {
            const [currentSlide, setCurrentSlide] = useState(0);
            const slides = [
                {
                img: image,
                title: 'Welcome to Prime Electronics',
                text: 'Discover the latest in electronics',
                },
                {
                img: 'image2.jpg',
                title: 'Big Savings Await',
                text: 'Shop now and save big on top brands',
                },
                {
                img: 'image3.jpg',
                title: 'New Arrivals',
                text: 'Check out our latest products',
                },
            ];

            const nextSlide = () => {
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            };

            const prevSlide = () => {
                setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            };

            useEffect(() => {
                const interval = setInterval(nextSlide, 2000);
                return () => clearInterval(interval);
            }, []);

    return (
        <>
            <section className="hero">
                    <div className="slider">
                        {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img src={slide.img} alt={`Slide ${index + 1}`} />
                            <div className="slide-text">
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    <button className="prev" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="next" onClick={nextSlide}>
                        &#10095;
                    </button>
            </section>
        </>
        );
    };
    

export default Heroarea;