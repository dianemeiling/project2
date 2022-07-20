import './Checkout.css'
import React from 'react';
import Tippy from '@tippy.js/react';
import 'react-tippy/dist/tippy.css'
import { Link } from "react-router-dom";
import styled from 'styled-components'


function Checkout(){
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
        <div className="container" style={{marginLeft:500, marginTop:30}}>
        <div className="row py-2">
          <div className="card" style={{ width:800}}>
              <div className="card-body bg-transparent">
                  <div className="title">
                      <h1 style = {{textDecorationLine:'underline'}}>Checkout Information:</h1>
                  </div>

                  <div className="elements-container" >
                        <h2>Please enter your personal shipping information.</h2>
            <br></br>
              <div style={{textAlign:"left",fontSize:35, fontWeight:"bold", textDecorationLine:'underline'}}> <img className='boxIcon' style={{height:40}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///83QUk0P0dDTVQhLzkwO0Ty8vMqNj9dZGo1P0gjMDoxPEQtOEEbKjUnMz0eLDZtc3jk5eaxtLbCxMbt7u/g4eLO0NG3urxNVVxSWmB9goago6aZnaA6REz29veSlpqIjZHU1demqax1e3/Hyctla3G0trkSIy9IUViMkJRyd3xpb3WdTfAaAAAKt0lEQVR4nO2d6XqqPBSFBUFkrvOMHWxr2/u/v49ge6qYYWVAqF/Wj/Oj5xHzCjvZQ8ju9W6pyXrpLNeTm37nDVVswih2HTeOwk3R9mAa0OgxDVznJDdIH0dtD8iwnh7yxDlTmOQPT20PyqAmq9R36vLz1Z0YZPHsRuEVX3UjI+f57xvk9CPLXCpfZZBZtp+2PUQtPT2kCRPvpCT9nLU9TGWV5hcL+E4GOTy0PVQVFWPXQ/gqRs8Ztz1eWU33Ccf8ruVm/nbQ9qAlNHsRmt81Y5Cu/4pBHob59eqHKMlf520PHtC476nxEcV5v+MGOd0GGX11RxVmwba7K+RsnQdaeCcFeUcNcj7ME+D+ATNs6ZYPu2eQ4yM0vST5LveB38HPj29tI51ruvWg1S/wyucPfJZLl3XTlRVyto6QIYdZ9D2HTPfgD5J1Ik6eD6HVPfYu1oHnnYfMuUn61XacvDhCzicl2p0sIcP182WLcXKx8SPkaUvSF9qdmItDK6L24uTRYxQgq0OWfbCW8BFmwbxLNCcgtj3dAJd7AwbbDHKCGI9BcyqNCDS/hfBa4z4Uh5TXul2cjE6E76/Y777GIuXadNyYpvsUW8wicDEb7+BYMsy8xt3y2YuHjMfNAswhGWx9qVxA+cM16pYfhpTM7rVgp3K2TpHpuHb1tDG3vIxtEYNJ0NTZ/DWXznWcGL0m3PLBNoGmdTjbsjhC0zFdbuQbdstnaw9bmgMshT0AvSG2wtIgzbnl81fQud6NIfdq9OjJm9+1jLnl4OMUp0PMRX76kk81MlS65WKPQqBi42DO9TtYDpysFFONdLnRTsstP6/b8r4GNb/iOWEU2jQYg/RD1SDrdVuGYjS6IYU203xEYeJ9qhgktW57LbiS+/T5bsr8rhWnsvXkAnWu0Wq8YfOjMHq7Z5xvuufVbf/JDXLMuS7GO7jQRheSgIRnA+JcQ6s7uisG/L04CrKXEMxWvogdKtC5jvMjthIR51oLr7w1pLL41kdW5bB0y/lO8WQHFY6SFCyDgb8XW2dhygHzrHxvx5l0PlPkeQ/eQecaDEbYSi7vyGz9jizPYfrJGtEKeJ7gcjSa6WerqgFcqtiGiIsVrOhj2mbCj5aPAJYqATP9bLmsOiKUg8621B89F/KhzjUYjHC+KT+yf8ny6kLjzmm/zrPgFiY56BtpxbanbxJMiOLyVUZb/j95w3Kz6EaxLbYngyyyvKvEtMnmyBmY20djWyjTz/kifF/NuM+7zpLyiT6XEAkfwFILW3EUwjnfYsMfsCQh4oOC5TK2ZDacEleJO15pQhKFpQ8cR2aM5QLYSt7xrMtcmAhRIXTIasFIi0z3ud7qHsoUtBfApghFQkZaBAxGeFf14c37YOJImZBMdvllWkTbuY4lEmajDyhxpEXoXC79us51KLNbD0wcEekR/suNTveau9hCmQ1e4I7jk3QJT/ltLNPPViixa7Z43kUyD4s+IVkhNVc/iYoueVgkR2eAUE8yu9efVHYct0yYvAMZo2+pzdUYYdZMhtPNkj1c+xtjiSO/HmhAhMFB15GmCS7B9UhVNobMr/QnD7VJDyL0ijIY0k111gSX4Hpi5/qHJSMOX+HV/goRkkepeIZSP5jgLEEPLvK7UVi5kQNlwlKLpaZb9v2dWYRvTgMTIb+hgBYhqdoqbpr4VShRyUQTIUn+G29pEsKlUpZkNomCRf7ai7bahCRqcVUNUuaFWHDLYzmWy3jLAGGpBVQcqY9F5qXmCVoW6tfjLTOESPagzifxYnoxdtTLQqYIya5eiddiQu/qt2YKfJ2PlU01R1gZJArYh82PVJWQKzLjLZOEvd4QtcYYdGAOQ2g14sVbLRFWTqiQ7w1d3XnxVluEnCLZz8g22A5aUYW+PUKH+7IdWd2Roq64LNQqIbPsD1YZQyTd0TIhNSe6WIHmBxUzWicka39w5nqjW/jgeKsDhOfv9vDPyjj7gAfHW50gdEgGqrwl4Ba+0JPZOdoVwuq9F6gMEEu+lNcdQuhNZ5Jaktww2iVCoaRqiS0QYpsI2XKjWOUgsNsRhn3wxT26ZGqJLRGSKyvviCpXd9VXDG9LCL/9eqkgx4sZrROSnYly+/LhPVedIexJFcBjqdW9M4TwUTyxgaPpWiKEiptJqvQ6SFcIRV52mBk6+qJFQhIpscoQbuSbOi2hVcIeKV9RvADl1b2LhMQLqM85vtFzvdon7PWuCM2gfcsSVrKE/2QJ6bKEerKElSzhP90/4YoTLtwH4YHzXvZ9EJJ361lh370QktcCImrYdz+EJOxzKAWyeyLsVQcl1KfVOyMk29BqlbK7I+zVtxHfIWGtYn2XhL3zXQf3Svhbjblfwp83yO+Z8PR2kn/XhD1y7qfL+q87ISy9ANZ/3A0hU5ZQT5awkiXUlCXUkyWsZAk1ZQn1ZAkrWUJNWUI9WcJKllBTllBPlrCSJdSUJdSTJaxkCTVlCfVkCStZQk1ZQj1ZwkqWUFOWUE+WsJIl1JQl1JMlrGQJNWUJ9WQJK/0PCQ29SP6tZgmVzoLOzDZrb5bwUDuyHCJ0PP3jKs7UJOFkVbuFIGF1oJixUTRHSOsoChKSY2NyrWNjztQQIaOJD0zoVOdqGukN3Qghs4mPDKHobFRUDRCSxhCMg4yohEv2ISuxRD8RlowTjvuco6NdWo9HQe+8hHuWrFhmCQdb/tHR1N55Y0H/Q5m+PhSZJJytRWfXZrRnTtjDMkzSV3WDrD8h6oTIuel0l3Mv7kNaGuQb7aM3JES6rjkRtQ9przdEesnWz+y/KSHYvyAYsi7wAPYDVjm9ygDh6BHsB/zFvsYC7enMa4VIl/ZMA3Zd80WH+YPtlZitEJsiBDtkQt4J3FvdkTqKTIeQdF1DTmGEeqsTgf3eyVnNuEGqE4729NMNroaTSUQJBS0ioUiiv5Eq4dMnZH4Kh0uC7QZj7Mx0VUK0Lws6ikuBk1fsQQapQFhgXddCmU5ZNYFNkEivOKEFSBOKnOufLw9SidngWmDr1tNp6yYJSV8WhE+iUxZTYIcwUdM4KcIDdtiynx/NHC4JHu7Mb/wnQfiGNZZK0i9zh0vOsK6qvDgZJQT7soRBtDZytuvvF2+xzrjM7vYY4ayc2xDvX6INrYTAw50ZPYzrzzmNEGx66HtH1ShVJNAtj2kTgJgQbno4NHm2a12lWw71tsuSTe0pEhAONljL39L8dLJFiKb7FFuIo8s4mUs4eoywtkieqRQ8X6hb/n7eh4NDCK9G+llbWGCLB//stHUmIfWgaOq1zJb7RAKbTf665XTCwSbBvMLUTPVESsR2oKUrqGyHRgia328fpVurAJu+Vl5AfZmJ0Y6YoWS6xLAWR8gL8PNh/U+7FdZxW7ItUgOaDzGDvPoLZn5ftze/a81Ueq4gUmmL1JCmW89sh3Knml7qblG7GiMFE1xU17ZtzbF+qYDCJG/UuVbXTKZZMFuapdhmNd1iEQLn/glas3ZA4x3cBOlaN3Wu1TXBmiBR+Ay0RbqR2KdhcyTf9LBVTT+wxNWPSvNryblWF9outuKLkjada3VNOMfTn8n/O+Z3rSdxgNQR51pd/Dg5rOer/qQGm5jZlSzulnOtrua7krWvq3w9I/f/lzVb/9ZcQmb95m9rsI2jOHTC8t8mCkfd0GS9dJbr265+/wEvwOcvKTqrNAAAAABJRU5ErkJggg=="}></img> Shipping Info: </div>
                          <div className="firstNameContainer">
                              <label htmlFor="coachpicker" className="form-label" >First Name:</label>
                             
                              <input className="form-control" type="text" style={{height:45, width:700}}/>
                            
                            </div>
                                
                            <div className="nameContainer">
                                <label htmlFor="coachpicker" className="form-label" >Last Name:</label>
                                <input className="form-control" id="date" name="date" type="text" style={{height:45, width:700}}/>
                            </div>

                            <div className="nameContainer">
                                <label htmlFor="coachpicker" className="form-label" >Business Name (corporate orders only):</label>
                                <input className="form-control" id="date" name="date" type="text" style={{height:45, width:700}}/>
                            </div>
                            
                            <div className="AddressContainer">
                                <label htmlFor="coachpicker" className="form-label" >Address:</label>
                                <input className="form-control" id="date" name="date" type="text" style={{height:45, width:700}}/>
                            </div>

                            <div className="ApartmentNumContainer">
                                <label htmlFor="coachpicker" className="form-label" >Apartment Number (optional):</label>
                                <input className="form-control" id="date" name="date" type="text" style={{height:45, width:700}}/>
                            </div>

                            <div className="PhoneNumberContainer">
                                <label htmlFor="coachpicker" className="form-label" style={{}} ><img className='phoneIcon' style={{height:40}} src={"https://icon-library.com/images/phone-icon-jpg/phone-icon-jpg-17.jpg"}></img>  Phone Number:</label>
                               <Tippy content="You may enter a phone number using dashes, spaces or no spaces between numbers.">
                                <input className="form-control" id="date" name="date" type="text" style={{height:45, width:700}}/>
                                </Tippy>
                            </div>

                          

                            <div className="btn">
                            <a className="btn btn-warning"  role="button" style={{width: 300, color:'black'}} ><StyledLink to="/checkout2">Next</StyledLink></a>
                            </div>
                     
                            
                  </div>

               
                  </div>

              </div>
  
             
              
              
          </div>
      </div>
 
    )
}

export default Checkout;