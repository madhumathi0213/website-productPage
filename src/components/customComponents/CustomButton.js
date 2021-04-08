import React from 'react';
import styled from 'styled-components';
import '@fontsource/roboto';



const Button = (props) => {
    const ButtonCustom = styled.button`
    font-family:roboto;
    background-color :${props.bgColor};
    font-size:16px;
    height :50px;
    width:160px;
    border:1px solid gray;
    padding:10px;
    margin:20px 20px 20px 0;
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