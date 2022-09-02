import styled from "styled-components/native";
import {fonts, colors} from '../../styles';

export const ContainerTodo = styled.View`
    padding:5% 0;
    margin-bottom: 4%;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${colors.gray500};
    border: 1px solid ${colors.gray400};
`
export const ButtonSelectItem = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: ${props => props.isSelected ? `2px solid ${colors.purpleDark}` : `2px solid ${colors.blue}`};
    background-color: ${props => props.isSelected ? `${colors.purpleDark}` : `${colors.gray500}`};
`
export const ContainerTodoText = styled.View`
    width:80%;
`
export const TodoText = styled.Text`
/*     background-color: red; */
    margin: 0 4%;
    text-align: center;
    color:${props => props.isSelected ? `${colors.gray300}` : `${colors.gray100}`};
    font:14px ${fonts.regular};
    text-decoration: ${props => props.isSelected ? `line-through ${colors.gray300}` : ''};
`
