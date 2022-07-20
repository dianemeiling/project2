import { Button } from "bootstrap";
import {useTranslation} from 'react-i18next';
import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

function Confirmationmessage(){
    const {t, i18n} = useTranslation();
    
    function handleClick(lang){
        console.log(lang);
        i18n.changeLanguage(lang);
    }
    const StyledLink = styled(Link)`
    color: Black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration:none;
    textDecorationLine: none;
    margin: 1px;
    position: SpeechRecognitionAlternative;
    font-size: 20px;
    `;


    return(
        <>

        <div className="container-fluid" >
            <div className="card" style={{ height: 470}}>
                <h1 className="display-2 text-center  text-black ">Your message has been sent!</h1>
                <br />
                <p className="card-body" style={{fontSize:30, color: "black"}} >An Isshin Benkyo representative will respond to you via email or phone in 3 business days.
                    <br></br>
                    <br ></br>
                    <a className="btn btn-warning" href="Home.jsx" role="button" ><StyledLink to="/">Return to Home</StyledLink> </a>


                </p>



            </div>
        </div></>
    
    
    )
    
}

export default Confirmationmessage;