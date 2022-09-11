import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const fonts = {
    bold: 'InterBold',
    regular: 'InterRegular'
};

export const colors = {
    gray100: '#F2F2F2',
    gray200: '#D9D9D9',
    gray300: '#808080',
    gray400: '#333333',
    gray500: '#262626',
    gray600: '#1A1A1A',
    gray700: '#0D0D0D',
    purple: '#8284FA',
    purpleDark: '#5E60CE',
    blue: '#4EA8DE',
    blueDark: '#1E6F9F',
    danger: '#E25858'
};

interface Actived {
    readonly isActive: boolean;
}

export const Container = styled.View<Actived>`
    height: ${({isActive}) => isActive ? '25%' : '75%'};
    align-items: center;
    justify-content:center;
    flex-direction: ${({isActive}) => isActive ? 'row' : 'collumn'};
    background-color: ${({isActive}) => isActive ? colors.gray700 : colors.gray600};
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
    color: ${({isActive}) => isActive ? colors.blue : colors.purpleDark};
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
export const ButtonAddParticipant = styled.Pressable`
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
export const StatusTodoList = styled.View<Actived>`
    width: ${({isActive}) => isActive ? '27%' : '34%'};
    flex-direction: row;
    justify-content: space-between;
`
export const StatusTodoListText = styled.Text<Actived>`
    font: 14px ${fonts.bold};
    color:${({isActive}) => isActive ? colors.blue : colors.purple};
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
export const ButtonSelectItem = styled.TouchableOpacity<Actived>`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: ${({isActive}) => isActive ? `2px solid ${colors.purpleDark}` : `2px solid ${colors.blue}`};
    background-color: ${({isActive}) => isActive ? `${colors.purpleDark}` : `${colors.gray500}`};
`
export const ContainerTodoText = styled.View`
    width:80%;
`
export const TodoText = styled.Text<Actived>`
    padding: 0 6%;
    color:${({isActive}) => isActive ? `${colors.gray300}` : `${colors.gray100}`};
    font:14px ${fonts.regular};
    text-decoration: ${({isActive}) => isActive ? `line-through ${colors.gray300}` : 'none'};
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