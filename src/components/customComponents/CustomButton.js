import React from 'react';
import styled from 'styled-components';
import '@fontsource/open-sans';



const Button = (props) => {
    const ButtonCustom = styled.button`
    font-family:open-sans;
    background-color :${props.bgColor};
    font-size:16px;
    height :40px;
    width:160px;
    border:1px solid gray;
    padding:10px;
    margin:20px 20px 20px 0;
    @media screen and (max-width: 760px) {
       width:100px;
       font-size:14px;
      }
    &: hover {
        background-color:${props.hoverBg};
        color:${props.hoverColor};
    }
    &: focus {
        outline :none;
    }
`;


    return (
        <ButtonCustom >
            {props.child}
        </ButtonCustom>
    )
}
export default Button;