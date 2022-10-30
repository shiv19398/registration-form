import styled from 'styled-components';
import { device } from '../device';

export const Container=styled.div`
    margin:auto;
    border: 2px solid black;
    padding: 1rem;
    width:80%;
    height: 70vh;
    overflow:auto;

    @media ${device.tablet}{
        width:60%;
        height:70vh;
    }

    @media ${device.laptop} {
        width:40%;
        height:70vh;
    }
`;
