import { useState, useContext } from "react";
import { ConcludedItemsContext } from "../../context";
import { Alert, Image, FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../globalStyles";
import {
    ContainerDark, ContainerGray, ContainerTitle, Rocket, Title,
    Form, InputParticipant, ButtonAddParticipant, ButtonAddParticipantText,
    ButtonAddParticipantCircle, ContainerStatusTodoList, StatusTodoList,
    StatusTodoListText, ContainerNumberDestaqued, NumberDestaqued,
    ContainerTodo, ButtonSelectItem, ContainerTodoText, TodoText,
    ContainerListEmpty, ContainerListEmptyText
} from "./styles";

interface PropsTodoList {
    task: string;
    isFinished: boolean;
}

type PropsTodoItem = {
    taskText: string;
    isFinished: any;
    onRemove: () => void;
}

const Home = () => {

    const {concludedItems, setConcludedItems} = useContext(ConcludedItemsContext);

    const [todoList, setTodoList] = useState<Array<PropsTodoList>>([]);
    const todoListName:string[] = todoList.map(({task}) => task);
    const [newTask, setNewTask] = useState<any>({task:''});

    const handleTodoAdd = () => {
        if(newTask.task === '') return Alert.alert('Todo List', 'Digite uma tarefa!');
        if(todoList.includes(newTask)) return Alert.alert("Todo List", "Essa tarefa já está na lista!");
        const teste:any = [...todoList, newTask];
        console.log(teste);
        setTodoList([...todoList, newTask]);
   }

    const handleTodoRemove = (item:string) => {
        Alert.alert('Todo List', `Deseja excluir a tarefa ${item}?`, [
            {
                text:'Sim',
                onPress:() => {setTodoList(todoList.filter(itemDeleted => itemDeleted.task !== item))}
            },{
                text:'Não',
                style:'cancel'
            }
        ])
    }

    const handleItemIsFinished = (item:string) => {
        const itemSelected = todoList.filter(({task}) => task === item)[0];
        todoList.map(item => {if(item === itemSelected) item.isFinished = !item.isFinished});
        setConcludedItems(todoList.filter(({isFinished}) => isFinished === true).length);
    }

    const TodoItem = ({taskText, onRemove, isFinished}: PropsTodoItem) => {
        const itemSelected = todoList.filter(({task}) => task === taskText)[0];
        
        const Button = () => {
            if(itemSelected.isFinished === true){
                return(
                    <ButtonSelectItem isSelected
                    onPress={() => {isFinished();}}>
                        <Image source={require('../../assets/images/Vector.png')} />
                    </ButtonSelectItem>
                )
            }
            return( <ButtonSelectItem onPress={() => {isFinished();}}/> )
        }

        return(
            <ContainerTodo>

                <Button/>
                <ContainerTodoText>
                    <TodoText isSelected={itemSelected.isFinished}>{taskText}</TodoText>
                </ContainerTodoText>

                <TouchableOpacity onPress={() => onRemove()}>
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
                    <Title isActive>to</Title>
                    <Title>do</Title>
                </ContainerTitle>

            </ContainerDark>

            <ContainerGray>

                <Form>
                    <InputParticipant
                    placeholder={'Adicione uma nova tarefa'}
                    placeholderTextColor={colors.gray300}
                    onChangeText={(text: string) => {setNewTask({task: text, isFinished: false});}}/>
                    
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
                            <NumberDestaqued>{concludedItems}</NumberDestaqued>
                       </ContainerNumberDestaqued>
                    </StatusTodoList>
                </ContainerStatusTodoList>

                <FlatList
                    data={todoListName}
                    keyExtractor={item => item}
                    
                    renderItem={({item}) => (
                        <TodoItem
                            key={item}
                            taskText={item}
                            isFinished={() => (handleItemIsFinished(item))}
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