import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const Wrapper = styled.div`

    margin: 0 5px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
`;

export const Icon = styled.img`
    padding: 5px;
    width: 50px;
    position: right;
    padding-left: 1000px
    font-size: 24px;
    color: #ffffff;
`;

export const CartCount = styled.span`
    position: absolute;
    margin-top: 30px;
   
    padding: 3px 7px;
    border-radius: 50px;
    background: #f05454;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
`

export const CartSideBar = styled.div`
    z-index: 1000;
    width: 350px;
    background: white;
    top: 0;
    right: 0;
    padding: 25px;
    position: fixed;
    overflow: auto;
    height: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transtion: all ease-in-out 0.3s;

    &.expand{
        transition: all ease-in-out 0.3s;
        right: 0;
    }

    &.shrink{
        transition: all ease-in-out 0.3s;
        right: -400px;
    }

`;

export const EmptyCart = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
`;

export const SideBarHeader = styled.div`
    font-weight: 300;
    font-size: 24px;
    text-transform: uppercase;
    text-align: left;
    position: relative;
    padding: 15px 0;

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background: black;
    }
`;

export const Card = styled.div`
    display:flex;
    position: relative;
    margin: 35px 0 75px 0;

`;

export const CardImage = styled.img`
    flex: 1;
    height: auto;
    width: auto;
    max-width: 100px;
    max-height: 100px;

`;

export const CardBody = styled.div`
    flex: 2;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

`;

export const CardTitle = styled.span`
    font-size:14px;

    font-weight: 500;
`;

export const CardRemove = styled.button`
    font-size: 16px;
    color: black;
    cursor: pointer;
`;

export const CardRow = styled.div`

    display:flex;
    justify-content: space-between;
    align-items:flex-start;
`;

export const ClearButton = styled.button`
    width: 100%;
    padding: 18px 24px;
    background: transparent;
    color: black;
    cursor:pointer;
    margin-bottom: 5px;

`;

export const CheckoutButton = styled.button`
    width: 100%;
    padding: 18px 24px;
    background: transparent;
    color: black;
    cursor: pointer;

`;

export const RemoveButton = styled.button`
    width: 50%;
    size: 10px;
    padding: 18px 24px;
    background: transparent;
    color: black;
    cursor: pointer;
    

`;