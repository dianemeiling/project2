import './Pencils.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

import React, { useReducer } from "react";
import { ADD_TO_CART, CLEAR_ALL_FROM_CART, REMOVE_FROM_CART } from '../../store/types';
import Reducer from '../../store/Reducer';
import Context from '../../store/Context';
import { useContext } from 'react';



const Pencils = (props) => {

    const context = useContext(Context);


    const cardInfo = [
        {key:9,image: "https://static2.jetpens.com/images/a/000/198/198185.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=0e3ec400853302a707b5553a4dd7f98a", 
        title: "Pentel Orenz Nero Mechanical Pencil - 0.5 mm", price: 1.00, text: "The Nero takes Pentel's cutting-edge Orenz pencils and pushes them into the future. The name Nero is Italian for black, a reference to the pencil's sleek, all-black design."},
        
        {key:10,image: "https://static2.jetpens.com/images/a/000/192/192683.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=9b0013eb76f225165c595fe60adb8192", 
        title: "Uni Kuru Toga Mechanical Pencil - 0.5 mm - Kiki's Delivery Service", price: 2.00, text: "A perfect gift for fans of Studio Ghibli and Hayao Miyazaki, this pencil features a design inspired by the classic animated film Kiki's Delivery Service! This item will make the perfect gift for any Ghibli fan."},
        
        {key:11,image: "https://static2.jetpens.com/images/a/000/148/148458.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=690835e63b654ec80578b440121734c1", 
        title: "Kaweco Special Brass Lead Holder - 2.0 mm", price: 2.00, text: "Featuring a slim design and Kaweco's signature octagonal barrel shape, the Special is a classy addition to any collection. This item is perfect for any working professional or a magpie."},
        
        {key:12,image: "https://static2.jetpens.com/images/a/000/198/198565.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=aa659ed6605f8ae1d1842eeb2951b60e", 
        title: "Uni Alpha Gel Switch Mechanical Pencil - 0.5 mm - Navy", price: 2.00, text: "The versatile Uni Alpha Gel Switch pencil is designed for convenience. It combines Uni's ultra-soft Alpha Gel grip with two writing modes."},
        
        {key:13,image: "https://static2.jetpens.com/images/a/000/216/216146.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=1c413845561793177c5cb665b23f307c", 
        title: "Blackwing Pencil - Starting Point Set", price: 2.00, text: "This starter set is perfect for anyone interested in experiencing the premium quality of Blackwing pencils and accessories for the first time. This item is the perfect starter set for Blackwing fans. "},
        
        {key:14,image: "https://static2.jetpens.com/images/a/000/021/21373.jpg?ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&w=600&s=f2861f34ccb4bf9850b997c4d3d58f7c", 
        title: "Uni Kuru Toga Roulette Mechanical Pencil - 0.5 mm - Silver Body", price: 2.00, text: "This pencil resolves issues that all mechanical pencils have: As you use a pencil, the lead wears down on one side, forming a slanted wedge-shaped tip."},
        
        {key:15,image: "https://static2.jetpens.com/images/a/000/107/107187.jpg?ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&w=600&s=9032125041c6fcb768d0246a38864c2e", 
        title: "Zebra DelGuard Type-ER Mechanical Pencil - 0.5 mm - Black", price: 2.00, text: "Never worry about lead breaking again! The DelGuard utilizes an ingenious two-part system that makes it virtually impossible to break the lead."},
        
        {key:16,image: "https://static2.jetpens.com/images/a/000/199/199782.jpg?auto=format&ba=middle%2Ccenter&balph=3&blend64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazIucG5n&bm=difference&bs=inherit&chromasub=444&fm=jpg&h=400&mark64=aHR0cDovL3d3dy5qZXRwZW5zLmNvbS9pbWFnZXMvYXNzZXRzL3dhdGVybWFyazEucG5n&markalign=top%2Cright&markalpha=30&markscale=16&q=90&usm=20&w=600&s=8afc42837e24f608403f66be4407c5f7", 
        title: "Uni Kuru Toga Mechanical Pencil - 0.5 mm - Pokémon - Yellow Pikachu", price: 2.00, text: "TThis pencil resolves issues that all mechanical pencils have: As you use a pencil, the lead wears down on one side, forming a slanted wedge-shaped tip."},
        
        
    ];

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

export default Pencils