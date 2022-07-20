import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 90%
    margin: 0 auto;

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all ease-in-out 0.3;
    cursor: pointer;

    background-color: white;
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
    -webkit-box-shadow: 0px 12px 18px -6px rgba(0,0,0,0.3);
    box-shadow: 0px 12px 18px -6px rgba(0,0,0,0.3);
    margin: 20px;
`;

export const CardImg = styled.img`
    height:100px;
    width:90px;
`;

export const CardBody = styled.div`
    padding: 15px;
    margin-top: 25px;
`;

export const CardTitle = styled.span`
    font-size: 35px;
    font-weight: 700;
    margin: 5px;
`;

export const CardButton = styled.button`
border-radius: 5px 5px 5px 5px;
size: small;
    background:transparent;
`

export const CardPrice = styled.span`
    font-size: 30px;
    font-weight: 300px;
    margin: 5px;
    padding: 3px 9px;
    color: black;
`;

export const OverlayWrapper = styled.div`
    position:absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.5);
    transition: all ease-in-out .3s;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items: center;

`;



