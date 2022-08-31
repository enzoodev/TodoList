import styled from 'styled-components/native';

export const ContainerDark = styled.View`
    height: 25%;
    background-color: #0D0D0D;
    flex-direction: row;
    align-items: center;
    justify-content:center;
`
export const ContainerGray = styled.View`
    height: 75%;
    background-color: #1A1A1A;
`
export const Rocket = styled.Image`
    margin-right:5px;
`

export const ContainerTitle = styled.View`
    flex-direction:row;
    justify-content: center;
`

export const Text = styled.Text`
    font-size: 40px;
    font-family: 'Inter-Bold';
    color: ${props => props.primary ? "#4EA8DE" : "#5E60CE"};
`