import { useState, useContext } from "react";
import { ConcludedItemsContext } from "../../contexts";
import { Alert, Image, FlatList, TouchableOpacity, Text } from "react-native";
import {
    colors , ContainerDark, ContainerGray, ContainerTitle, Rocket, Title,
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

const Home = () => {

    const {concludedItems, setConcludedItems} = useContext(ConcludedItemsContext);

    const [myTodoList, setMyTodoList] = useState<Array<PropsTodoList>>([]);
    const myTodoListName:string[] = myTodoList.map(({task}) => task);
    const [newTask, setNewTask] = useState<any>({task:''});

    const handleTodoAdd = () => {
        if(newTask.task === '') return Alert.alert('Todo List', 'Digite uma tarefa!');
        if(myTodoList.includes(newTask)) return Alert.alert("Todo List", "Essa tarefa já está na lista!");
        setMyTodoList([...myTodoList, newTask]);
   }

    const handleTodoRemove = (item:string) => {
        Alert.alert('Todo List', `Deseja excluir a tarefa ${item}?`, [
            {
                text:'Sim',
                onPress:() => {setMyTodoList(myTodoList.filter(itemDeleted => itemDeleted.task !== item))}
            },{
                text:'Não',
                style:'cancel'
            }
        ])
    }

    const handleItemIsFinished = (item:string) => {
        const {isSelect, setIsSelect} = useContext(ConcludedItemsContext);

        const itemSelected = myTodoList.filter(({task}) => task === item)[0];
        myTodoList.map(item => {if(item === itemSelected) item.isFinished = !item.isFinished});
        setConcludedItems(myTodoList.filter(({isFinished}) => isFinished === true).length);
        console.log('teste');
        if(isSelect === true){return(
            <ButtonSelectItem isSelected onPress={() => {setIsSelect(false)}}>
                <Image source={require('../../assets/images/Vector.png')} />
            </ButtonSelectItem>
        )}
        else { return(<ButtonSelectItem onPress={() => {setIsSelect(true);}}/>) }
    }

    type Props = {
        taskText: string;
        IsFinished:any;
        onRemove: () => void;
    }

    const TodoItem = ({taskText, onRemove, IsFinished}: Props) => {
        return(
            <ContainerTodo>
                <ButtonSelectItem onPress={() => { return(<IsFinished/>) }}/>
                <ContainerTodoText>
                    <TodoText isSelected>{taskText}</TodoText>
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
                    <Title primary>to</Title>
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
                            <NumberDestaqued>{myTodoList.length}</NumberDestaqued>
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
                    data={myTodoListName}
                    keyExtractor={item => item}
                    
                    renderItem={({item}) => (
                        <TodoItem
                            key={item}
                            taskText={item}
                            IsFinished={() => (handleItemIsFinished(item))}
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