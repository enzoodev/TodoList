/* import {ContainerTodo, ButtonSelectItem, ContainerTodoText, TodoText} from './styles';
import { Image } from 'react-native';
import {useState} from 'react';

type Props = {
    name: string;
    onRemove: () => void;
}

const TodoItem = ({name, onRemove}: Props) => {
    const [isSelect, useIsSelect] = useState<Boolean>(false);
    const [selectedItems, setSelectedItems] = useState<Number>(0);

    const handleVector = () => {
        if(isSelect === true) return(<Image source={require('../../../../assets/images/Vector.png')}/>)
    }

    return(
        <ContainerTodo>

            <ButtonSelectItem isSelected={isSelect} 
            onPress={() => { 
                if(isSelect === true) return useIsSelect(false)
                useIsSelect(true)
            }}>
                {handleVector()}
            </ButtonSelectItem>

            <ContainerTodoText>
                <TodoText isSelected={isSelect}>{name}</TodoText>
            </ContainerTodoText>

            <Image source={require('../../../../assets/images/trash.png')}/>

        </ContainerTodo>
    )
}

export default TodoItem; */