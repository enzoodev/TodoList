import { useEffect, useState } from "react";
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

    const [myTodoList, setMyTodoList] = useState<any>([]);
    const [newTask, setNewTask] = useState<any>({task:''});

    useEffect(() => {
/*         console.log(newTask); */
/*         console.log(myTodoList); */
    },[myTodoList]);

    const handleTodoAdd = () => {
/*         if(changeTodo === '') return Alert.alert('Todo List', 'Digite uma tarefa!');
        if(todoList.includes(changeTodo)) return Alert.alert("Todo List", "Essa tarefa já está na lista!");
        setTodoList([...todoList, changeTodo]); */

        if(newTask.task === '') return Alert.alert('Todo List', 'Digite uma tarefa!');
        if(myTodoList.includes(newTask)) return Alert.alert("Todo List", "Essa tarefa já está na lista!");
        setMyTodoList([...myTodoList, newTask]);
        let meuVar = myTodoList.filter((item: object[]) => {
            return item
        })
        console.log(meuVar);
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
        onRemove: () => void;
    }

    const TodoItem = ({name, onRemove}: Props) => {
        const [isSelect, setIsSelect] = useState<boolean>(false);

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
                    onChangeText={(text: string) => {
/*                         setChangeTodo(text); */
                        setNewTask({task: text, isFinished: false});
                    }}/>

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
                    /* data={myTodoList} */
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <TodoItem
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