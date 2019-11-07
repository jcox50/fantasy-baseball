import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg` 
    background-position: center; 
    display: inline-block; 
    border: none; 
    padding: 20px; 
    width: 5vw; 
    
    height: 10vh;
    transition: all 0.5s;
    cursor: pointer;
`
const Playball = () => {
    
        return (
            <Icon xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="350 0 300 300" >
                <path d="M647.5 201.8c-1 2.1-2 4.2-3.1 6.3-1.2-.4-2.4-.9-3.5-1.4l-8.9 4.7c-3.4 1.9-6.6-3.4-2.9-5.5l5.1-2.7c-3.2-2-6.1-4.2-8.8-6.5l-10.1 2.6c-3.8 1.1-5.8-5-1.6-6.2l6.2-1.6-7-7.4-10.1 2.8c-3.9 1.2-6-5-1.7-6.3l6.7-1.9-7.2-6.4-10.2 4.6c-3.8 1.8-6.9-4.1-2.7-6.1l6.9-3.1c-2.6-1.9-5.2-3.6-7.9-5.2l-9.7 6.4c-3.5 2.4-7.6-3-3.7-5.7l6.8-4.5c-2.8-1.5-5.6-2.8-8.5-4l-9 8.2c-3.2 3-8.2-1.8-4.7-5.2l6.4-5.9c-2.9-1-5.9-1.9-8.8-2.7l-7.9 9.9c-2.7 3.6-8.6-.5-5.6-4.5l5.8-7.2c-3-.6-6-1-9-1.4l-5.9 11.4c-2 4.1-8.7 1.2-6.5-3.3l4.5-8.7-8.3-.1-6.4 12.5c-2 4.1-8.7 1.2-6.5-3.3l4.5-8.7c-3 .3-6 .7-8.9 1.2l-3.5 12.5c-1.1 4.3-8.1 2.9-6.9-1.9l2.5-9c-3 .7-6 1.6-9 2.6l-1.4 12.3c-.4 4.4-7.4 4-6.9-.8l1-8.8c-3 1.2-5.9 2.5-8.7 4l.5 11.7c.3 4.3-6.5 5-6.8.3l-.4-8.3c-2.8 1.7-5.6 3.4-8.3 5.4l2.3 10.7c1 4.1-5.4 5.9-6.5 1.4l-1.6-7.7c-2.6 2.1-5.1 4.3-7.6 6.6l3.6 9.8c1.5 3.8-4.4 6.4-6.1 2.3l-2.6-6.9-7.4 7.9 2.7 9.9c1.1 3.8-4.9 5.9-6.1 1.6l-1.8-6.6c-2.8 2.5-5.9 4.9-9.3 7l-.4 9.9c-.1 3.9-6.3 4-6.2-.3l.3-6.3c-2.3 1-4.7 1.9-7.2 2.5-1.1-2.1-2.2-4.2-3.2-6.4 2.3-.5 4.5-1.3 6.6-2.1l-4.5-2.7c-3.5-2.1-.2-7.4 3.2-5.3 1.3.8 5.1 2.9 7.9 4.7 2.8-1.7 5.3-3.6 7.6-5.6l-5.9-1.4c-4.1-1-2.5-7.1 1.5-6.2 1.6.4 6.5 1.4 10 2.4l6.8-7.2-6.7-1c-4.3-.6-3.3-7 .9-6.4 1.8.3 7.6.9 11.3 1.6 2.5-2.4 5.1-4.7 7.7-6.8l-7.1-2.1c-4.2-1.2-2.2-7.6 1.9-6.4 1.8.6 8 2.2 11.7 3.5 2.8-2 5.6-3.8 8.5-5.6l-7.2-3.6c-4.1-2-1-8.1 3-6.1 1.8.9 7.9 3.6 11.5 5.6 3-1.5 6-2.9 9.1-4.2l-7.1-5c-3.8-2.6.3-8.3 4-5.7 1.7 1.2 7.6 5.1 11 7.8 3.1-1 6.3-2 9.5-2.8l-6.7-6.6c-3.4-3.3 1.7-8.4 5-5.1 1.5 1.5 7.1 6.6 10.1 9.9 3.3-.6 6.5-1 9.8-1.3l-5.6-8.3c-2.7-4 3.4-8 6.1-4.1 1.2 1.7 5.7 7.9 8.1 11.9l8.3.1-5.6-8.3c-2.7-4 3.4-8.1 6.1-4.1 1.3 1.9 6.6 9.2 8.7 13.1 3 .3 6 .8 9 1.4l-3.6-8.7c-1.8-4.4 4.8-7 6.6-2.7.8 2 4.1 9.2 5.5 13.3 3 .8 6.1 1.7 9.1 2.8l-2.1-8.6c-1.1-4.5 5.7-6.1 6.8-1.6.5 2 2.5 9.1 3.2 13.3 3 1.3 5.9 2.7 8.8 4.2l-.7-8.2c-.4-4.5 6.5-5 6.8-.5.2 2 1 8.7 1.1 12.8 2.8 1.7 5.6 3.6 8.3 5.5l.6-7.7c.3-4.4 7-3.8 6.6.6-.2 1.9-.4 8.1-.9 12l7.6 6.8 1.6-7c1-4.2 7.3-2.6 6.3 1.5-.4 1.8-1.5 7.4-2.5 11.1l6.8 7.2 1.6-6.4c1-4.1 7.2-2.4 6.1 1.6-.4 1.6-1.4 6.3-2.4 9.8 2.4 2 4.9 3.9 7.7 5.6l.1-6c.1-4.1 6.3-3.9 6.2.1 0 1.5.1 5.7-.1 9 1.3 1 2.5 1.4 3.6 1.7zM451.3 40.5c2.4-.3 11.5-1.4 12.8-2.7 3.2 1.5 6.4 3 9.7 4.3l-6 3.2c-3.5 1.6-1 6.9 2.5 5.2 1.8-.8 8.5-4 10.9-5.8 3.5 1.2 7.1 2.2 10.8 3.1l-6 5.5c-3.2 2.7 1 7.5 4.2 4.8 1.5-1.3 7-5.9 9.6-8.7 3.6.6 7.2 1.1 10.9 1.5l-6 8c-2.9 3.8 3 8.2 5.9 4.4 1.3-1.7 6.3-7.9 8.8-11.8l11.1-.1-4.7 7.7c-2.5 4 3.6 7.7 6.1 3.7 1.1-1.8 5.4-8.3 7.4-12.2 3.7-.4 7.3-1 10.9-1.7l-2.5 6.4c-1.4 3.9 4.5 5.9 5.9 2.1.6-1.6 2.7-6.5 3.9-10.1 4.1-1.1 8.2-2.3 12.2-3.7l-.7 5.3c-.4 3.8 5.4 4.2 5.7.5.1-1.3.7-5 1.1-8.1 4.4-1.8 8.7-3.9 12.8-6.1l.8 4.7c.7 3.7 6.3 2.5 5.5-1.1-.2-1.1-.6-3.9-1.1-6.6 1.1-.7 2.2-1.3 3.2-2-1.4-.9-2.9-1.7-4.3-2.6-2.4-1.5-9.3-4.3-11.8-5.1-3.4-1.1-5.4 4.1-1.7 5.4l5.2 1.8c-3.4 1.8-6.9 3.5-10.5 5l-8.4-6.1c-2.9-2.1-6.4 2.5-3.2 4.8l5.2 3.8c-3.7 1.3-7.4 2.5-11.2 3.5l-7.2-8.5c-2.5-3-7.5.8-4.7 4.2l5 6c-3.6.7-7.2 1.3-10.9 1.7l-6.3-11c-2.1-3.9-8.5-.8-6.2 3.5l4.7 8.1-11.2.1-5.7-12.5c-1.8-4.2-8.6-1.6-6.7 3l4.1 8.9c-3.7-.4-7.3-.9-10.8-1.5l-2.4-10c-.7-3.9-7-3-6.2 1.3l1.8 7.2c-3.7-.9-7.4-1.9-10.9-3.1l.2-7.4c.3-3.6-5.4-4.4-5.8-.4L477 36c-3.5-1.4-6.9-2.9-10.3-4.5l1.8-5.2c1.4-3.3-3.8-5.7-5.3-2.1l-1.6 4.6c-1.6-.9-3.1-1.7-4.6-2.7-2.2 1.3-4.4 2.6-6.5 3.9 2 1.3 4 2.5 6.1 3.7l-5.9 1c-3.9.5-3.1 6.3.6 5.8z" fill-rule="evenodd" clip-rule="evenodd" fill="red"/>
                <path class="st1" d="M466.2 54.7c-6.2-3-18.1 1.4-30 9.7 2.8-3.4 5.8-6.9 9.3-10.4 2.3-7.7-15.7-6.9-23.9 1.6-29.9 34.4-41.2 82.2-28.1 127.5 4.6 2.2 10.1 1.8 15-2.1 13.3-11.2 19.6-26.6 17.8-34.9-2.8-6.2-5.3-12.8-6.6-19.7-1.3-7-1.2-14.5-.5-21.5 5 0 10-1.1 16.6-2.7 15-3.6 23-14.6 27.7-23.8 5-9.9 10.7-20.3 2.7-23.7zM461.5 65c-1.5 3.3-4.8 10-8.8 16.4C446 92 434 102.1 420.5 97.6c2.1-8.2 3.5-11.8 6.6-18.7 3.2-2.8 13.2-13.7 21.5-17.9 10.3-5.1 17.2-5.4 12.9 4zm188.9 59.6c3.5-7 5.6-16.3 3-23.9-3-8.8-6.9-17.2-11.6-25.2-2.7-.5-3.8.1-4.9 1.4 8 14.6 9.6 28.7 7.6 35.9-3.2-5.5-28-43.6-30.5-45.7-11.2-9.7-21.5-9.5-18.8-6.3 8.3 9.5 14.2 17.4 17.6 23.9 3.2 6.1 4.3 10.7 4 13.5-1.3 5.1-4.7 6.2-8.9 4.3-4.7-1.9-9.8-10.9-15.6-19.8-6.1-9.2-13.7-18.8-16.5-22.4-5.2-2.4-8.4 0-7.6 1.6 3.1 3.8 6.8 8.7 9.8 13.1 2.9 4.2 5.7 8.6 8.7 12.5.1.2 2 11.1-.9 20.1-2.9 9-10.5 16.1-12.6 15.3-5.2-2.1-10.6-41.9-10.9-45.3-2.9-4.4-7.1-7.5-12.1-9.3-3.3-1.2-8.4-2.1-9.3-.3-.1.8-.1 3.2 0 7.1-8.8-7.8-17.6-5.6-25.8 2.3-8.4 8.1-14.6 22-5.6 30.9 0 0-7.2 12.2-12.6 12.7-6.9.8-17.8-39.9 1.1-50.9.5-4-7.3-7.8-12.4-6.3-1.9.8-4.4 2.8-7.7 5.8-11 10.9-15.9 25.7-12.2 41 3.6 14.6 16.1 17.4 30.8 14.3 8.9-1.9 14.1-9.5 17.4-13.5 4.2 2.4 10.5 4.1 14.9 4.3 9.4.5 14.2-13.9 16.3-20.4l7.5 23.2c1.6 3.9 9.1 7.7 16.2 9.4 8.4 2.3 13.4-2.1 18.4-8.4 5.2-6.7 6.7-14.2 6.8-23.9 15.9 16.1 30.8 12.9 27.7 2.7 3.6 6.8 9 18.2 12 26.2 0 .5-6.1 6.6-11.3 12.4-10.4 11.6-3.8 18.6 6.9 28.7 16.3 14 30.1 6.2 30.8-7.6.4-14.6-9.8-32.9-9.7-33.4zm-124.9-20.4c-.6-7.4 3.5-31.5 15.3-24.2 0 28.7-14.2 37.7-15.3 24.2zm105.2 54.3c-8.2-5.7 4.3-21.6 9.2-25.6.7 5.6.7 32.2-9.2 25.6zM578 20c-40.8-10.8-68.5-10.7-109.4.3C503.3 3 543.2 2.9 578 20zM457.7 229.1c6.3-2.9 10.1-11.2 10.6-19.9.6-8.8-3.5-18.5-9.9-18.8-2.6.5-5.6 2.1-8.6 4.2-6.7 5.9-13.7 12.2-22.2 18.4-5.3 3.9-6.7 4.1-11.7 6.5-1.1.7-.3 2 .3 1.9 5.1-1.4 4.6.3 4.3 4.2-.1 2-.2 3.9-4.7-2.3-2.1-2.9-3.2-.5-1.7 1.9 4.5 7.5 19.1 22 27.2 27.9 6.6 4.7 14.5 7.9 19.9 6.7 9.7-2.9 10.2-28.8-3.5-30.7zm-22-13.3c6.6-3.2 18.3-11.8 18.8-4.1.5 8.3-12.6 11.8-19.8 12.9.4-2.8.8-5.8 1-8.8zm-2.2 24.2v-8c7 1.3 18.9 2.6 21.2 8.9 3 8.3-16.1 2.2-21.2-.9zm199.6-13c-1.7-.4-3.4 1.5-4 3.2-2.4 6.7-22.3 28.7-41.5 33.7-1.5.2-1.2-2.9.1-3.4 5.7-2 6.7-8.9 6.8-13.3.2-4.7.2-14.1.3-18.7l1.1-32.5c0-1.7-3.5-7.7-6.5-11.2-.8-.8-.5-2.1.3-1.8 4 2.4 8.4 6.4 11.9 11.4.5.6 4.6 2.3 5.5 3.1 0 0 8.5 6.5 6.3 6.4-2.1-.1-2.8 1.5-3.4 3.3-2.3 7.9-3.3 29.4-2.2 35.7 0 0 14.2-10 17-16.7.4-2.6 1.1-4.6-1.3-6.5-1.2-.9.8-2.7 4.8 2.4.9 1.2 1.6.7 2.7 1.5 2.5 1.5 3 3.7 2.1 3.4zm-50.7 34.3c.6 6-2.1 9.9-3 8-6.3-12.9-30.2 14.5-49.4 11.1-1.5-.3-1-3.5.3-3.6 5.7-.7 6.7-10.5 6.8-17 .1-6.9 1.8-25.3 1.9-32.2l1.1-49.7c0-2.6-3.5-8-6.5-10.1-.7-.5-.5-2.5.3-2.7 4-.9 8.4.1 11.9 3.8.5.4 4.6-2.5 5.5-2.6 1.9-.2 3.6-.1 5.5.3 1 .2 1.3 1.8.8 2.6-2.1 3.2-2.8 7.6-3.3 12-2 17.1-3.8 63.4-2.4 79.5.1.7 15.7-5.4 18.1-6.8 4.5-2.7 8.8-7.4 8.6-13.7 0-1.4 1.7-2.1 2.1-.9 1.9 5 1.3 9.1.3 14.6-.6 2.9 1.3 4.7 1.4 7.4zm-54.3 10.2c-8.6-2.1-8.6-6.3-9.1-17.2-1.2-26-3.5-47.1-6.8-72.7-.7-5.1-1.1-12.4 3.1-14.9 1.2-.7 1-3.2-.3-3.1-5.2.5-10.2 1.6-14.5 7-2.3 3-7.2-3.4-15.3 2.7-1.1.9-.9 2.9.3 2.6 1.9-.6 2.9.5 3.2 2.5l-7 48.2L475 259c-1 3.5-4.2 4.1-7 4.4-3.1.3 6 9.7 11.5 4.3 3.3 3.7 6.9 6.4 10.8 8 .9.3 1.5-1.4.8-2.4-2.2-2.8-2-4.1-1.8-5.9.7-6.2 1.3-12.4 2-18.6 5 1 10.2 1.5 15.3 1.9.3 9.1.8 20.8-5.4 25.5-.9.6-.5 2.6.5 2.9 4.8.9 9.1-1.3 13.1-4.8 1.1-1 5.5 4.5 13.3.4.9-.6 1.1-3 0-3.2zm-34.7-37.4c1.4-12.5 4.3-27.9 8.2-39.9l4.2 38.6c-4.1.5-8.2.9-12.4 1.3z"/>

            </Icon>
   
        )
    };

                    
export default Playball;