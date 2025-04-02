import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'nome' : '1px solid #fff'};
    background: ${ props => props.theme === 'primary' ? 'linear-gradient(180deg, #fE7E5D 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    margin-bottom: 20px;
    
    &:hover {
        opacity: 0,8;
    }

    &:active {
        opacity: 0.5;
    }
`