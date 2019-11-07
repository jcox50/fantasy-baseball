import React from 'react';
import { Link } from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import bgimg from '../images/crookednumber6.jpg';
import Playball from './svg components/playball';


const Globalstyle = createGlobalStyle`
    body {
        background-image: url(${bgimg});
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-color: #464646;
        height: 100vh;
        font-family: "Courier New", Courier, monospace;
}
`;

const TitleContainer = styled.div` 
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
`;
const SiteTitle = styled.h1`
    margin: 0px;
    padding-right: 0px;
    padding-left: 0px; 
    margin-top: 30vh;
    background: black;
    font-family: "Courier New", Courier, monospace;
    text-decoration: none;
    color: #004a7c;
    font-size: 1.5em;
    padding: 10px 0px 10px 0px;
`;





class Mainpage extends React.Component{
    render(){
        return(
            <div>
                <Globalstyle></Globalstyle>
                <TitleContainer>
                    <SiteTitle>Crooked Number Fantasy Baseball</SiteTitle>
                    <Link to='/login'><Playball /></Link>
                </TitleContainer>
                 
            </div>
            
        )
    }

}

export default Mainpage;