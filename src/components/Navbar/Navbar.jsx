import './Navbar.css'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
//import Pens from './components/Pens/Pens';

const StyledLink = styled(Link)`
    color: Black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration:none;
    margin: 1px;
    position: SpeechRecognitionAlternative;
    font-size: 20px;
    `;
    

const Navbar = (props) => {
   
    return(
       
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="collapse navbar-collapse" id ="navbarNav">
                        <div className="links">
                            <StyledLink to="/">Home</StyledLink>
                            <StyledLink to="/pens">Pens</StyledLink>
                            <StyledLink to="/pencils">Pencils</StyledLink>
                            <StyledLink to="/blog">Blog</StyledLink>
                            <StyledLink to="/contactus">Contact Us</StyledLink>
                            <StyledLink to="/about">About</StyledLink>
                            
                         
                        </div>
                        
                   

                </div>
            
            </nav>
    
    )
}

export default Navbar