import './ContactUs.css'
import React from 'react';
import Tippy from '@tippy.js/react';
import 'react-tippy/dist/tippy.css'
import { Link } from "react-router-dom";
import styled from 'styled-components'

function ContactUs(){

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
                      <h1 style = {{textDecorationLine:'underline'}}>Contact Us!</h1>
                  </div>

                  <div className="elements-container" >
                        <h2>Have a question, concern or complement? Leave us a message!</h2>
            <br></br>
              <div style={{textAlign:"left",fontSize:35, fontWeight:"bold", textDecorationLine:'underline'}}>Contact Info:</div>
                        
                                
                            <div className="nameContainer">
                                <label htmlFor="coachpicker" className="form-label" >Full Name:</label>
                                <input className="form-control" id="date" name="date" type="text" style={{height:45, width:700}}/>
                            </div>

                            <div className="nameContainer">
                                <label htmlFor="coachpicker" className="form-label" ><img className='phoneIcon' style={{height:40}} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8mJiYnJycAAAAWFhaSkpKkpKTg4ODMzMzp6ekjIyP8/PwfHx/5+fnExMQaGhoRERHFxcW9vb0KCgrv7++AgIBDQ0N8fHw+Pj45OTnz8/OwsLBcXFzY2NhFRUWfn58uLi5mZmZPT09wcHA67JNlAAAL0klEQVR4nO2di5ajKBCGBTPpbtRoJHY6Sd9m9v3fcSnkqlERTaI5/OfsmdnMjO0fivqgAI2ioKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKAgDyWPvoGZ1OPjOSz2GTzvt3/Wru3+0GXxfPnM46LYrFxFnH9ezs22S7Io2Z5oShBCGK1dJKWnbRJlSWI4jL6+Y/LoO5tRJP7+irRD9rsLTfFTOcQpvSiL7JcfSp4hPLWYF0J/6rQK/5XxM7mTwnHJ/TGHX/FTtZ8URvEXd5hk/1LtMKfxukVz7TD9B/k0ibZU+ybV5XXdulRGxqRbiNHspD8qSp9R0sJUFrrBThn74GI0IYrXb7GMDT8MGVH0NzfSDNms3WK5MaIU539ZkKYm6QlmgZplj75NT7EbLwt75JJnDBXEaENMflmgrtYhC9Ffyw4A41KYMMQYYbreQC0pBguGw+ISbQvVfMIqyUtGybVNhuGOy5wIY6ohi2203eD6ww2qh6aYp5sVOuRJBgsXm7q58EY73PyolMOid7c2g8ziTg8+SfqzaTpE8cs+Vl1xjegvIaGIThjvX4QZy2EEXwLmyZbgzaqgAZjYiDvHEILRdYfRnhLCvwVM8KqgAZjAPLuwFiJ0H3U4TKJdkcpIXdcADoZqIkLTYsecdLRhFO0owSuDho0JTOgOPu10WI9bBTTyVUBDGJSYEKHX7ZAFqoIGWQc0GCYU4Emxqz/sdphAoCporGIAV1KFCQjRulF62jBaFTTamBDqdQitqKBBlw2NDAbbGhPKYL9DDg28EmhoTGCOCZk4+tsQAlVDY7NUaCRisC0xoUM0GnYIvXfx0Ghgws6Kgw5XAY2rmBAadJhIixwaC+2LZawxUezspd/hNpTQqL+h5UGDY0IEmYUJIReHkG5ElNcVuDvdu5vqqprIFKRl0MlhEu03C4aGiYnNvrU7wakNFwuNXkwIOTq0oJEuBhpgMO3ChJCrQzkMF9C48Z27y8QEvXpbrg6zZUKjgYlrOdC5DaNor+sDAI3k0SnVwgRU1a7/tREODWggPpm62b27iU+XUDcmhEY4ZKObZUHDwsSuaxPbmDa0y1PFI6HBMVE0i05XNc4hsyihQdAjocExgYjCRE9yH+kQ+iIysvPDHBr0Qv30GumQQWOzCGiYmNhcx4TQ2Dbk0JAzDRiGPwAaGfRBcQcwm+jAhNB4hxY08kdAg2Eid8CE0HiHRnkKPQgaqhwvik69f9mjDUVhQ0CD3hcaHBNUYqJVsrgiL4dNaGR3dJg5Y0LIz6GGBm4XRm6qumyEXTAh5OfwgTMNh9mELc82FDMNgdx7QYNjAsngGcKEkLdDExroTtAATCBnTAh5O7ShcafFN1VLccGEkH8bamjwGlC9k/p2qneh11MbN0wITXEIpWIkFt94oN7UIQ9RsXyG2oXfTk1yyPsivg80DExg5z4ImuTwrtBQmMCOmBCa1oawtUhDg94MGoAJuUWb/TTqhAmhqQ4ZF+8AjQYmxhic7BAm2xoaN9vmx0EvMDGytDC5DeUSKrkVNAxMEDQGE0IzODShweuoMzust5GMx4TQHA4taHQXLj2V8NKQByaE5nCY8TkpvhU0TEx4bOqZpQ1ZRi00NOIZoQGYkCdf2PWLUVm01kwObwWNKZgQmsmhBY05DxTxFV4/TAjN1YY3gMZUTAjN55CXpyQ0ihmgkRi7LLBT0emqZnRoQoMvoXpeRirhC6D+mBCa0SFsk+cW59pyqzbEgkHv7DVnG84JjRkwITSvQwMaGE3Zych3G4pe7YsJoXkdWuWpadAwMTGpfDC3Q1XQnAANs+gEgjnZchwe3tUOHrE33MOh3rNdX+f9sBiH0fkjR79685QfNDgm9FanX5R/NJ8yM0LzOjy8p1h9+Xyl2GvWD5GudrSy6+GUtaKv5nPI0t/bR/3kF4zU5qnR0LAwUVd/4QksH2++iXlGh6wF62NVvBUlNEYetK23U0pMiGvB4TLvvjhjlJ7fUyTXLnO5e4qMhgZgQgz+0k0u12FR+u7ZF2ebPUELQh8kcHyaVnte3oTGwIS6QoNjgm+7qh8WQPcVhYPlcFUMrfjA2RML0VMqQpSllyMfwKkzU7EjNJL6BCgSZ5dgqHYsRFwgkp68AnWuKD1/pDKHkqKCT/ZqpsEnU25tKKdLfLDNh2qVPO6BSeoFjZkcHj4UJgg9Rvz5YWxYUmdVd2goTLBQhyQMWfhIZfpiGdUDGjM4ZGYOEhPsNmgl/8DaUzAIjaz+TurbMWf0rC/WXx7hFsdCYw6HGhOQHSr9J3AiXEKjGIBGvZ1SzSbMxZdKrfz6QGOOKGV9UKYDHFc64RnlKYKHoQEclJgwik7s1yqW6EHj++L0lRkbE8fISOkJL/hLaBTd0OCYKDQm4p15EeiL/tCY7hAwQQxM2GpAo6sBzi1M2FLQIKOhMTlK25iwZUKjc6aRqMUXjQlb/tCY6tDEBDPYypcKGjCM7u6L/HErIsvE7e+B5VlhcTw0pjjsxIQtAxoo/omaKRX+90cXnToLv77QmOSwExMti/JwH6F/X+xEwX7/8pcSdbyuu7LtCY1JUXp415igVXei3MWpaqOU/LFj7PCH6GcZpnFX0Snhraig4T4lnrDrS2ICUnwDE22LSLQ1dEZ03Mnumu2OiK9/8vCzMdH6eRwaHDxjoDHBIeuDPZiwtS+ILi2RnNLTf1VV/XeiNNdVHTy4+GJC48MxUP2jlGMCd2PCVFKftlGhCjk/z3POGf0xGd4nI6GB3aHh7fB8SlEfJmyHcNCWqCIcD1mM5bpZ/dEv3wLQ2ywWNFB6crLo5RAw8W5gYiBEa32dCh2oTcEc8vTlcpmjAY13F2j4OTSKThwTTh0iO8a6yRoiKD46VeQSDo0x5Sm/KGUGHTDRurnyvbhukRTvjhU5Gxq5AzR8TpQoTPDgOrZGKV3/Lomyy2+ccr5gkTAg96fx7yWrH2Q8fJUEMqr84S7Q8HGoMYEHMdH4p1FSfhYFJFFRq0jzovgsk3ETIgYN7AwNjygdg4mmoAneyuO/34I/zLj4/Xcs3xyDwNAYaIx3OAoTthL+xGlwc3j5Ar1AN0r4U5pHeBwHjXEOxWxCXLxzNnEHqZkGGpppjHTYxMTj5AyNkVEKmMBjMXEDmdDA/dAYdVrdxkQ1PkPMJvjBlRs0Rjk8a0w4DtVuKj2A4xl1hvP4LItqTDzeIHBRQ6Mzo45wyLKoLyZuogY0uspTjg4VJvCjMWFLQAP3QMPV4XIwYWsYGq5RamACPRITthJRgeuDhtuTsFiILgQTtprQ+LgCDTeHC8OErQFoOEXp+SQe8gkrSEszyKGBBTRIGxouDi1MHB+PCVsMGsc+aAw5zKI2JpbRB6XgbhrQsLYTDzlkmPheJCZsmdD4tqExGKUcE2hpmLBlQAO1oDHwlF09m0CLwoQtCQ10baYx4BA2ISwWE7Y0NJAFjf4oPX+QZc0m+mTMNIhRnup12MTEEiNUKumCRqfD5WPCVic0Oh2yPrgGTNiyoCH6YneU1phAChOrUKVP7UtodL3BYx2YsHUdGl0OLUyspQVBVRMaHVG6KkzYakLjukMDE4guHBO2ABp61g8Z9arD8ymtZ80ELR8TtgQ0UL31A6en8xWH9PU7RyvDhC0NDZR/v9KWQ5yT9WHClgENIl5byR2qc3VkZZiwZUNDtVaxjS4bvXtnhZiwpdcXZbMVl9brjsnCp0v9OlJr2wd/h2WWI0vrwoQtDQ2lPGu8S5bvul8RJmzBvoDKfMc4f5es/T5gWo3cP7A4JZXlB94HbL7TOV9zH5Q66n7H3+lsvZeb/Fbl69ua9VpWejNk/V5u+93q5Anera5fpyrfrd4CxpOIo0JklTJ+Sofq0Qdw8oGqxzw/hzAMXX4U91isXmiKr28CXacIThko9NCF/e7rO34qh/H3lzk2g3OpyfZEU/IMkYpJSk/bhJ/ZtXW+fObxZv2K889L10ai5LDf/lm7tvtDz6hzzQNSrac3+Dw+goKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoLurP8BeNLlnmjq/FsAAAAASUVORK5CYII="}></img> Email Address:</label>
                                <input className="form-control" id="date" name="date" type="text" placeholder='ex. kazukoyamamoto@gmail.com' style={{height:45, width:700}}/>
                            </div>
                            

                      
                            <div className="PhoneNumberContainer">
                                <label htmlFor="coachpicker" className="form-label" style={{}} ><img className='phoneIcon' style={{height:40}} src={"https://icon-library.com/images/phone-icon-jpg/phone-icon-jpg-17.jpg"}></img> Phone Number:</label>
                               <Tippy content="You may enter a phone number using dashes, spaces or no spaces between numbers.">
                                <input className="form-control" id="date" name="date" placeholder='xxx-xxx-xxxx' type="text" style={{height:45, width:700}}/>
                                </Tippy>
                            </div>

                            <div className="PhoneNumberContainer">
                                <label htmlFor="coachpicker" className="form-label" style={{}} >Message:</label>
                               <Tippy content="You may enter a phone number using dashes, spaces or no spaces between numbers.">
                                <input className="form-control" id="date" name="date" type="text" style={{height:70, width:700}}/>
                                </Tippy>
                            </div>

                          

                            <div className="btn">
                            <a className="btn btn-warning"  role="button" style={{width: 300, color:'black'}} data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"><StyledLink to="/confirmationmessage">Send Message!</StyledLink></a>
                            </div>
                     
                            
                  </div>

               
                  </div>

              </div>
  
             
              
              
          </div>
      </div>
 
    )
}

export default ContactUs;