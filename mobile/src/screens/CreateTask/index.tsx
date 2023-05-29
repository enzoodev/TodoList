import React from "react";

import * as S from './styles';

export const CreateTask: React.FC = () => {
    return(
        <S.InputParticipant
        placeholder={"Adicione uma nova tarefa"}
        placeholderTextColor={theme.colors.gray300}
        onChangeText={(text: string) => {
          setNewTask({ task: text, isFinished: false });
        }}
        value={newTask.task}
        onBlur={() => {
          setIsHandleBorderColor(false);
        }}
        onFocus={() => {
          setIsHandleBorderColor(true);
        }}
        isActive={isHandleBorderColor}
      />
    )
}