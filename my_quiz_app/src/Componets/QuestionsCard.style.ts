import { type } from "os";
import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 900px;
    margin-top:15px;
    background: #ebfeff;
    border-radius: 10px;

    border: 3px solid #0085a3;

    padding: 20px;

    box-shadow: 0px 5px 10px rgba(0 ,0 ,0,0.25);

    text-align: center;

    p {
        font-size:  1rem;
        font-weight:900;
    }

    .number {
        color :#fd811a;
        font-size: 1.2rem;
        text-align: left;
    }
`

type ButtonWrapperProps = {
    correct: boolean,
    userClicked : boolean
}


export const ButtonWrapper = styled.div <ButtonWrapperProps>`

    transition: all 0.3s ease;

    :hover { 
        opacity : 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size : 1rem;
        width: 100%;
        font-weight:900;
        height: 50px;
        margin : 5px 0;
        background : ${({ correct,userClicked }) => 
            correct 
            ? 'linear-gradient(90deg,#56ffa4,#59bc86)'
            : !correct && userClicked
            ? 'linear-gradient(90deg,#ff5656,#c16868)'
            : 'linear-gradient(90deg,#7a59b1,#7a59b1)'
        };

        border : 3px solid #fff;
        border-radius : 15px;
        color : black;
        font-style : italic;
        text-shadow : 0px 1px 0px rgba(0,0,0.1)
        box-shadow : 1px 2px 0px rgba(0, 0, 0, 0.1)
        
       
    }
`