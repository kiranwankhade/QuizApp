import styled, { createGlobalStyle } from "styled-components";

//@ts-ignore

import BG7 from  "./Images/BG7.jpg"


export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }


    body {
        background-image: url(${BG7});
        background-size:cover;
        background-repeat:no-repeat;
        background-position: center center;
        margin:0px;
        padding:0 20px;
        display:flex;
        justify-content:center;
        align-item:center   }

    *{
        box-sizing: border-box;
        font-family:'catamaran', sans-serif;
    }

`;

export const Wrapper = styled.div`
    // display:flex;
    // flex-direction:column;
    // justify-content:center;
    // align-item:center;
    text-align: center;


    > p {
        color : #fe3e05;
    }

    .score{
        color : #7652ba;
        font-size : 2rem;
        font-Weight: 900;
        margin :0;
        text-align: center;
    }

    h1 {
        font-family : Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
        background-image: linear-gradient(180deg,#fe3e05,#fdee3e);
    
        background-size: 100%;
    
        background-clip: text;
    
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip : text;
        -moz-text-fill-color: transparent;
    
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight:bold;
        text-align: center;
        font-style: italic;
        margin: 20px;
    }

    .start, .next {
      
        cursor:pointer;
        background: linear-gradient(180deg,#0000,#ffcc91);
        border : 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0 ,0 ,0,0.25);
        height: 40px;
        margin :  20px 0; 
        padding: 0 40px;
        max-width: 200px;
    }

    .start { 
        max-width: 200px;
    }


`