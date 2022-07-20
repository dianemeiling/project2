
import React, {useState} from 'react';
import { CardImg } from 'react-bootstrap';
import{Wrapper, OverlayWrapper, Card, CardBody, CardPrice, CardTitle, CardButton,}from "./Styles";



export default function Product({addProductToCart, ...props}){
    const [isHover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    
    return(
       <Wrapper
       onMouseEnter={() => handleMouseEnter()}
       onMouseLeave={() => handleMouseLeave()}
       
       >

{isHover && (
        <OverlayWrapper onClick={() => addProductToCart({ ...props })}>
          <h1>fart</h1>
        </OverlayWrapper>
      )}

           <Card >
                <CardImg variant ="top" src={props.imageURL} />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    
                    <br></br>
                    <CardPrice>{props.price}</CardPrice>
                    <br></br>
         
                    <CardButton onClick={() => addProductToCart({...props})}>Add to Cart</CardButton>
                </CardBody>
           </Card>
       </Wrapper>
       
       );
    

    
};