import { Button } from "bootstrap";
import {useTranslation} from 'react-i18next';
import React from 'react';
import './Confirmation.css';
import { Link } from "react-router-dom";

function Confirmation(){
    const {t, i18n} = useTranslation();
    
    function handleClick(lang){
        console.log(lang);
        i18n.changeLanguage(lang);
    }



    return(
        <>
        <h2>Select a language: </h2>
        <button onClick={()=>handleClick('en')} style={{borderRadius:10, backgroundColor:"white"}}>English</button>
        <button onClick={()=>handleClick('ko')} style={{borderRadius:10, backgroundColor:"white", marginLeft:5}}>Japanese</button>
        <button onClick={()=>handleClick('chi')} style={{borderRadius:10, backgroundColor:"white", marginLeft:5}}>Chinese</button>

        <div className="container-fluid" >
            <div className="card" style={{ height: 470}}>
                <h1 className="display-2 text-center  text-black ">{t('order.1')}</h1>
                <br />
                <p className="card-body" style={{fontSize:30, color: "black"}} >{t('details.1')}
                    <br></br>
                    <br ></br>
                    <a className="btn btn-warning" href="Home.jsx" role="button" ><Link to="/">{t('home.1')}</Link> </a>


                </p>



            </div>
        </div></>
    
    
    )
    
}

export default Confirmation;