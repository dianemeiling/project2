import './Pens.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

import React, { useReducer } from "react";
import { ADD_TO_CART, CLEAR_ALL_FROM_CART, REMOVE_FROM_CART } from '../../store/types';
import Reducer from '../../store/Reducer';
import Context from '../../store/Context';
import { useContext } from 'react';



const Pens = (props) => {

    const context = useContext(Context);


    const [cardInfo] = useState([
        {
            key:1,
            image: "https://static2.jetpens.com/images/a/000/211/211629.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=670d4f0a2b562895ecc03bb49fa394dc",
            title: "Kaweco Collection Sport Fountain Pen - Iridescent Pearl - Medium Nib - Limited Edition", price: 1.00, text: "Featuring Kaweco's signature compact design, the Sport line has maintained its stylish functionality ever since its creation in 1911. "
        },

        {
            key:2,
            image: "https://static2.jetpens.com/images/a/000/200/200353.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=74483852571a6e39981836f453404d47",
            title: "Moonman Capped Dip Pen - Blue Swirl - Glass Nib", price: 2.00, text: "Carefully crafted by passionate pen enthusiasts in China, Moonman pens offer a remarkable combination of style, quality, and affordability. This pen will make a great addition to any pen collection."
        },

        {
            key:3,
            image: "https://static2.jetpens.com/images/a/000/173/173055.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=f5243560e1e5d99b00e0a66807d2a282",
            title: "Zebra Sarasa Clip Gel Pen - 0.5 mm - Vintage Color 2 - 5 Color Set", price: 2.00, text: "Zebra Sarasa Clip Vintage Color pens feature chic, subdued ink with matching pen bodies and ivory clips with gold lettering."
        },

        {
            key:4,
            image: "https://static2.jetpens.com/images/a/000/215/215533.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=726e85d2ef28fdf2224cfb920b0210a5",
            title: "Zebra Mildliner Double-Sided Highlighter - Fine / Bold - 5 Gentle Color Set", price: 2.00, text: "Featuring softly colored ink, the Zebra Mildliner is perfect for the times when you want to highlight something without overwhelming everything on the page. "
        },

        {
            key:5,
            image: "https://static2.jetpens.com/images/a/000/171/171594.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=0c6826b36afdf402f73f5a8dce6bacb0",
            title: "Kuretake ZIG Clean Color Dot Double-Sided Marker - 12 Color Set", price: 2.00, text: "Create fun doodles and colorful notes with these double-sided markers. One end features a 0.5 mm hard plastic nib—great for detailed drawings and writing in a planner or bullet journal."
        },

        {
            key:6,
            image: "https://static2.jetpens.com/images/a/000/214/214403.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=e71de74b67dead79861f6bae4ec51230",
            title: "Sailor Pro Gear Slim Fountain Pen - Momo (Pastel Pink) - 14k Medium Fine Nib", price: 2.00, text: "Part of Sailor's Seasonal Festival series, this pen is inspired by one of the Go-Sekku, five traditional Japanese festivals that date back more than a thousand years."
        },

        {
            key:7,
            image: "https://static2.jetpens.com/images/a/000/142/142075.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=daf90fbfc473329d254dfd60ec70ee8f",
            title: "Pilot Vanishing Point Fountain Pen - Raden Water Surface - Rhodium Trim - 18k Fine Nib", price: 2.00, text: "Featuring a hand-lacquered barrel inlaid with colorful abalone shell pieces—a traditional Japanese technique known as raden—this pen is truly a work of art and can only be found here at Isshin Benkyo."
        },

        {
            key:8,
            image: "https://static2.jetpens.com/images/a/000/191/191904.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=d16d3ae5296777e8ffb0c80e5094d2df",
            title: "TWSBI Vac700R Iris Fountain Pen - Extra Fine Nib - Limited Edition", price: 2.00, text: "TWSBI fountain pens are loved for their high quality and affordability, offering advanced filling mechanisms normally reserved for much more expensive fountain pens. "
        },
    ]);



    const renderCard = (card, index) => {

        return (
            <>
                <Card style={{ width: '100px' }} key={index} className="box">
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>

                        <Card.Text> {card.text}  </Card.Text>
                        <Button variant="warning" onClick={() => {
                            console.log('I click it!')
                            context.addProductToCart({
                                key: card.key,
                                id: card.key,
                                imageURL: card.image,
                                price: card.price,
                                title: card.title,
                            })
                        }}>Add to Cart</Button>
                    </Card.Body>
                </Card></>
        );
    };



    return <div className="grid"> {cardInfo.map(renderCard)}

    </div>;



};

export default Pens