import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../globalStyles'

interface Actived {
    readonly isActive: boolean;
}

export const ContainerDark = styled.View`
    height: 25%;
    background-color: ${colors.gray700};
    flex-direction: row;
    align-items: center;
    justify-content:center;
`
export const ContainerGray = styled.View`
    height: 75%;
    align-items: center;
    background-color: ${colors.gray600};
`
export const Rocket = styled.Image`
    margin-right:5px;
`
export const ContainerTitle = styled.View`
    flex-direction:row;
    justify-content: center;
`
export const Title = styled.Text<Actived>`
    font:40px ${fonts.bold};
    color: ${props => props.isActive ? colors.blue : colors.purpleDark};
`
export const Form = styled.View`
    height: 9%;
    width: 87%;
    margin-top: -8%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10%;
`
export const InputParticipant = styled.TextInput`
    width: 82%;
    padding:0 10px;
    border-radius:5px;
    color:${colors.gray100};
    background-color: ${colors.gray500};
    font:15px ${fonts.regular};
`
export const ButtonAddParticipant = styled.TouchableOpacity`
    width: 16%;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blueDark};
`
export const ButtonAddParticipantCircle = styled.View`
    width:35%;
    height:35%;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border:1.3px solid ${colors.gray100};
`
export const ButtonAddParticipantText = styled.Text`
    color:${colors.gray100};
    font: 18px ${fonts.regular};
    margin-top: -4px;
`
export const ContainerStatusTodoList = styled.View`
    width: 87%;
    padding-bottom: 5%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: ${colors.gray400};
    border-bottom-width: ${StyleSheet.hairlineWidth};
`
export const StatusTodoList = styled.View`
    width: ${props => props.primary ? '27%' : '34%'};
    flex-direction: row;
    justify-content: space-between;
`
export const StatusTodoListText = styled.Text`
    font: 14px ${fonts.bold};
    color:${props => props.primary ? colors.blue : colors.purple};
`
export const ContainerNumberDestaqued = styled.View`
    width: 25px;
    border-radius: 50%;
    align-items: center;
    background-color:${colors.gray400};
`
export const NumberDestaqued = styled.Text`
    color:${colors.gray200};
`
export const Todo = styled.View`
    width: 87%;
`
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
    padding: 0 6%;
/*     text-align: center; */
    color:${props => props.isSelected ? `${colors.gray300}` : `${colors.gray100}`};
    font:14px ${fonts.regular};
    text-decoration: ${props => props.isSelected ? `line-through ${colors.gray300}` : ''};
`
export const ContainerListEmpty = styled.View`
    height:200px;
    align-items: center;
    justify-content: center;
`
export const ContainerListEmptyText = styled.Text`
    color:${colors.gray300};
    font:14px ${fonts.regular};
`