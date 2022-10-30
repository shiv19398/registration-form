import styled from 'styled-components';

export const Input=styled.input`
    width:100%;
    padding:15px;
    display:inline-block;
    margin:5px 0 22px 0;
    border:none;
    background: #f1f1f1;

    &:focus{
        background-color:#ddd;
        outline:none;
    }
`;

export const RadioButton=styled(Input).attrs({
    type:'radio',
})`
    width:auto; 
`;