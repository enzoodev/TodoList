import { useState, useEffect } from "react";
import { Alert, Image, FlatList , Text, TouchableOpacity } from "react-native";
import {
    colors , ContainerDark, ContainerGray, ContainerTitle, Rocket, Title,
    Form, InputParticipant, ButtonAddParticipant, ButtonAddParticipantText,
    ButtonAddParticipantCircle, ContainerStatusTodoList, StatusTodoList,
    StatusTodoListText, ContainerNumberDestaqued, NumberDestaqued,
    ContainerTodo, ButtonSelectItem, ContainerTodoText, TodoText
} from "./styles";

const Home = () => {

    const [todoList, setTodoList] = useState<string[]>([]);
    const [changeTodo, setChangeTodo] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<any>(0);

    const handleTodoAdd = () => {
        if(todoList.includes(changeTodo)) return Alert.alert("Todo List", "Essa tarefa já está na lista!");
        setTodoList([...todoList, changeTodo]);
    }

    const handleTodoRemove = (item: string) => {
        Alert.alert('Todo', `Deseja excluir a tarefa ${item}?`, [
            {
                text:'Sim',
                onPress:() => {setTodoList(todoList.filter((itemDeleted) => {return itemDeleted !== item}))}
            },{
                text:'Não',
                style:'cancel'
            }
        ])
    }

    type Props = {
        name: string;
        onRemove: () => void;
    }
    
    const TodoItem = ({name, onRemove}: Props) => {
        const [isSelect, useIsSelect] = useState<Boolean>(false);

        useEffect(() => {
/*             if(isSelect === true) return setSelectedItems(selectedItems + 1);
            setSelectedItems(selectedItems - 1); */
            if(isSelect === true){
                console.log("isSelect " + isSelect);
            }
            else{
                console.log("isSelect false " + isSelect);
            }
        },[isSelect]);

/*         const handleSelectedItems = () => {
            if(isSelect === true) return setSelectedItems(selectedItems + 1);
            setSelectedItems(selectedItems - 1);
        } */
    
        const handleVector = () => {if(isSelect === true) return(<Image source={require('../../assets/images/Vector.png')}/>)};
    
        return(
            <ContainerTodo>
    
                <ButtonSelectItem isSelected={isSelect} 
                onPress={() => { 
                    if(isSelect === false) useIsSelect(true);
                    else useIsSelect(false);
                }}>
                    {handleVector()}
                </ButtonSelectItem>
    
                <ContainerTodoText>
                    <TodoText isSelected={isSelect}>{name}</TodoText>
                </ContainerTodoText>

                <TouchableOpacity onPress={onRemove}>
                    <Image source={require('../../assets/images/trash.png')}/>
                </TouchableOpacity>
    
    
            </ContainerTodo>
        )
    }

    return(
        <>
            <ContainerDark> 

                <Rocket source={require('../../assets/images/rocket.png')}/>

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

                    <ButtonAddParticipant onPress={handleTodoAdd}>

                        <ButtonAddParticipantCircle>

                            <ButtonAddParticipantText>+</ButtonAddParticipantText>

                        </ButtonAddParticipantCircle>

                    </ButtonAddParticipant>
                    
                </Form>

                <ContainerStatusTodoList>

                    <StatusTodoList primary>

                       <StatusTodoListText primary>Criadas</StatusTodoListText>

                       <ContainerNumberDestaqued>
                            <NumberDestaqued>{todoList.length}</NumberDestaqued>
                       </ContainerNumberDestaqued>

                    </StatusTodoList>

                    <StatusTodoList>

                        <StatusTodoListText>Concluídas</StatusTodoListText>
                        
                        <ContainerNumberDestaqued>
                            <NumberDestaqued>{selectedItems}</NumberDestaqued>
                       </ContainerNumberDestaqued>

                    </StatusTodoList>

                </ContainerStatusTodoList>

                <FlatList
                    data={todoList}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <TodoItem
                            name={item}
                            onRemove={() => (handleTodoRemove(item))} 
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text>
                            Lista vazia, adicione gente
                        </Text>
                    )}
                    style={{width:'87%'}}
                />

            </ContainerGray>
        </>
    )

}

export default Home;