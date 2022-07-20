import './About.css'
import React from 'react';
import Tippy from '@tippy.js/react';
import 'react-tippy/dist/tippy.css'
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="container" style={{marginLeft:500, marginTop:30}}>
        <div className="row py-2">
          <div className="card" style={{ width:800}}>
              <div className="card-body bg-transparent">
                
                  <div className="title">
                      <h1 style = {{textDecorationLine:'underline'}}>About Us:</h1>
                  </div>

                  <div className="elements-container" >
                        <h3 style={{textAlign: "left", fontWeight:"bold", textDecorationLine:'underline'}}>Company History:</h3> 
                        <div style={{fontSize:20, textAlign:"left"}}>一心勉強 is a stationery shop that was born from the owner's love of stationery in the summer of 2022. 一心勉強 strives to provide
                            the best stationery to allow clients to reach their full potential. </div>
                        <br></br>
                        <h3 style={{textAlign: "left", fontWeight:"bold", textDecorationLine:'underline'}}>Company Information:</h3> 
                        <li style={{fontSize:20, textAlign:"left"}}>Phone Number: 819-232-3432</li>
                        <li style={{fontSize:20, textAlign:"left"}}>Email Address: isshinbenkyo@gmail.com</li>
                        <li style={{fontSize:20, textAlign:"left"}}>Warehouse Address: isshinbenkyo@gmail.com</li>
                        <li style={{fontSize:20, textAlign:"left"}}>Corporate Address: isshinbenkyo@gmail.com</li>

                        <br></br>
                        <h3 style={{textAlign: "left", fontWeight:"bold", textDecorationLine:'underline'}}>Direct Contacts:</h3> 
                        <li style={{fontSize:20, textAlign:"left"}}>CEO: Kazuko Yamamoto </li>
            
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Email Address: kyamamoto@isshinbenkyo.jp</li>
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Phone Number: 819-343-3434</li>
                        
                        <li style={{fontSize:20, textAlign:"left"}}>Creative Liasion: Shimizu Naoka </li>
                        
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Email Address: snaoka@isshinbenkyo.jp</li>
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Phone Number: 819-347-9434</li>

                        <li style={{fontSize:20, textAlign:"left"}}>Shipping Consultant: Tsugio Yamamoto </li>
                        
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Email Address: tyamamoto@isshinbenkyo.jp</li>
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Phone Number: 819-253-3934</li>

                        <li style={{fontSize:20, textAlign:"left"}}>Warehouse Manager: Kuniyo Kondo </li>
                        
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Email Address: kkondo@isshinbenkyo.jp</li>
                        <li style={{marginLeft: 40, fontSize:15, textAlign:"left"}}>Phone Number: 819-673-3654</li>

                        
                          
                     
                            
                  </div>

               
                  </div>

              </div>
  
             
              
              
          </div>
      </div>
 
    )
}

export default About;