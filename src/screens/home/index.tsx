import { useState } from "react";
import { Alert, Image, FlatList , Text, TouchableOpacity } from "react-native";
import {
    colors , ContainerDark, ContainerGray, ContainerTitle, Rocket, Title,
    Form, InputParticipant, ButtonAddParticipant, ButtonAddParticipantText,
    ButtonAddParticipantCircle, ContainerStatusTodoList, StatusTodoList,
    StatusTodoListText, ContainerNumberDestaqued, NumberDestaqued,
    ContainerTodo, ButtonSelectItem, ContainerTodoText, TodoText,
    ContainerListEmpty, ContainerListEmptyText
} from "./styles";

const Home = () => {

    const [todoList, setTodoList] = useState<string[]>([]);
    const [changeTodo, setChangeTodo] = useState<string>('');

    const handleTodoAdd = () => {
        if(changeTodo === '') return Alert.alert('Todo List', 'Digite uma tarefa!');
        if(todoList.includes(changeTodo)) return Alert.alert("Todo List", "Essa tarefa já está na lista!");
        setTodoList([...todoList, changeTodo]);
        console.log(todoList);
        let filterTodo = todoList.filter((item:any) => {return item.isSelectedProp});
        console.log(filterTodo);
    }


    const handleTodoRemove = (item: string) => {
        Alert.alert('Todo List', `Deseja excluir a tarefa ${item}?`, [
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
        isSelectedProp: any;
        onRemove: () => void;
    }

    const TodoItem = ({name, onRemove, isSelectedProp}: Props) => {
        const [isSelect, setIsSelect] = useState<boolean>(false);
        isSelectedProp = isSelect;

        const handleModifyButton = () => {
            if(isSelect === true){
                return(
                    <ButtonSelectItem isSelected 
                    onPress={() => {
                        setIsSelect(false);
                        
                    }}>
                        <Image source={require('../../assets/images/Vector.png')} />
                        <Text style={{color:'white'}}>valor dos selectedItems</Text>
                    </ButtonSelectItem>
                )
            }
            return(
                <ButtonSelectItem onPress={() => {
                    setIsSelect(true);
                }}>
                    <Text style={{color:'white'}}>valor dos selectedItems</Text>
                </ButtonSelectItem>
            )
        }    
    
        return(
            <ContainerTodo>
    
                {handleModifyButton()}
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
                    onChangeText={(text: string) => {setChangeTodo(text)}}/>

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
                            <NumberDestaqued>20</NumberDestaqued>
                       </ContainerNumberDestaqued>
                    </StatusTodoList>
                </ContainerStatusTodoList>

                <FlatList
                    data={todoList}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <TodoItem
                            isSelectedProp={() => {isSelectedProp}}
                            // imitar oque está feito na função onRemove
                            name={item}
                            onRemove={() => (handleTodoRemove(item))} 
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    style={{width:'87%'}}
                    ListEmptyComponent={() => (
                        <ContainerListEmpty>
                            <Image source={require('../../assets/images/Clipboard.png')}  style={{marginBottom:'10%'}}/>
                            <ContainerListEmptyText>Você ainda não tem tarefas cadastradas</ContainerListEmptyText>
                            <ContainerListEmptyText>Crie tarefas e organize seus itens a fazer</ContainerListEmptyText>
                        </ContainerListEmpty>
                    )}
                />

            </ContainerGray>
        </>
    )

}

export default Home;