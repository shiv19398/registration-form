import styled from 'styled-components';
import { device } from '../device';

export const Button=styled.button`
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;

    &:hover{
        opacity: 1;
    }

    @media ${device.tablet}{
        width:60%;
    }
`;