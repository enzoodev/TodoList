import { useState } from "react";
import { Alert, FlatList , Text } from "react-native";
import {
    colors , ContainerDark, ContainerGray, ContainerTitle, Rocket, Title,
    Form, InputParticipant, ButtonAddParticipant, ButtonAddParticipantText,
    ButtonAddParticipantCircle, ContainerStatusTodoList, StatusTodoList,
    StatusTodoListText, ContainerNumberDestaqued, NumberDestaqued,
    Todo, 
} from "./styles";

const Home = () => {

    const [todoList, setTodoList] = useState<string[]>([]);
    const [changeTodo, setChangeTodo] = useState('');

    const handleTodoAdd = () => {

        if(todoList.includes(changeTodo)){
            return Alert.alert("Todo List", "Essa tarefa já está na lista!")
        }
        setTodoList([...todoList,changeTodo]);

    }

    const handleTodoRemove = () => {



    }

    return(
        <>
            <ContainerDark> 

                <Rocket source={require('../../images/rocket.png')}/>

                <ContainerTitle>
                    <Title primary>to</Title>
                    <Title>do</Title>
                </ContainerTitle>

            </ContainerDark>

            <ContainerGray>

                <Form>

                    <InputParticipant
                    placeholder={'Adicione uma nova tarefa'}
                    placeholderTextColor={colors.gray300}
                    onChangeText={(text: string) => {setChangeTodo(text)}}
                    />

                    <ButtonAddParticipant>

                        <ButtonAddParticipantCircle>

                            <ButtonAddParticipantText>+</ButtonAddParticipantText>

                        </ButtonAddParticipantCircle>

                    </ButtonAddParticipant>
                    
                </Form>

                <ContainerStatusTodoList>

                    <StatusTodoList primary>

                       <StatusTodoListText primary>Criadas</StatusTodoListText>

                       <ContainerNumberDestaqued>
                            <NumberDestaqued>5</NumberDestaqued>
                       </ContainerNumberDestaqued>

                    </StatusTodoList>

                    <StatusTodoList>

                        <StatusTodoListText>Concluídas</StatusTodoListText>
                        
                        <ContainerNumberDestaqued>
                            <NumberDestaqued>2</NumberDestaqued>
                       </ContainerNumberDestaqued>

                    </StatusTodoList>

                </ContainerStatusTodoList>

                <FlatList
                    data={todoList}
                    keyExtractor={item => item}
                    renderItem= {({item:}) => {
                        <Todo
                        key={name}
                        name={item}
                        onRemove={() => (handleTodoRemove(item))} 
                        />
                    }}   
                    showsVerticalScrollIndicator={false}  
                />       

            </ContainerGray>
        </>
    )

}

export default Home;