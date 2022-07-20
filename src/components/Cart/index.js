import React, {useRef} from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './cart.css'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Wrapper, Icon, CartCount,CartSideBar, EmptyCart, SideBarHeader,
Card,
CardBody,
CardImage,
CardRemove,
CardRow,
CardTitle,
ClearButton,
CheckoutButton,
RemoveButton,
} from './Styles'

export default function Cart({isToggle, setToggle, carts, removeProductFromCart, clearCart, addProductToCart}){
    const $sideBarRef = useRef();

    useOnClickOutside($sideBarRef, () => setToggle(false));

    const StyledLink = styled(Link)`
    color: Black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration:none;
    textDecorationLine: none;
    margin: 1px;
    position: SpeechRecognitionAlternative;
   
    `;


    return <>
        <Wrapper onClick ={() => setToggle(true)}>
            <img style={{height:40, left:100, marginRight:35}} src={"https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"}></img>
            <CartCount style={{fontSize: 19}}>{carts.length}</CartCount>
        </Wrapper>

        <CartSideBar ref={$sideBarRef} className={isToggle ? "expand" : "shrink"}>
            <SideBarHeader>Your Cart</SideBarHeader>
            {carts.length === 0 ? (
                <EmptyCart>Empty Cart</EmptyCart>
            ): (
                carts.map(({product, quantity}) => (
                <Card key = {product.id}>
                    <CardImage src={product.imageURL} />
                    <CardBody>
                        <CardRow>
                            <CardTitle style={{textAlign: "left", fontWeight:"bold", fontFamily: "Verdana"}}>{product.title}</CardTitle>
                            <br></br>
                        </CardRow>
                        
                        <CardRow>
                            <CardTitle style={{textAlign: "left", fontFamily: "Verdana"}}>Total Quantity: ({quantity})</CardTitle>
                        </CardRow>

                        <CardRow>
                        <CardTitle style={{textAlign: "left", fontFamily: "Verdana"}}>Price : ${product.price * quantity}</CardTitle>
                        </CardRow>
                            <button style={{borderRadius: 9, backgroundColor:"white"}} onClick={() => removeProductFromCart(product.id)}>-</button>
                            <button style={{borderRadius: 9, backgroundColor:"white"}} onClick={() => addProductToCart(product)}>+</button>
                    </CardBody>
                    </Card>
                    ))
            )}

            {carts.length !== 0 && (
                <>
                   
                    <ClearButton style={{ borderRadius: 9, backgroundColor: "#feb200" }} onClick={() => clearCart()}>Clear Cart</ClearButton>
                    <br></br>
                    <ClearButton style={{ borderRadius: 9, backgroundColor: "#feb200" }} ><StyledLink to="/checkout">Checkout</StyledLink></ClearButton>
                    
                </>
            )}

        </CartSideBar>
    
    </>
    
} 