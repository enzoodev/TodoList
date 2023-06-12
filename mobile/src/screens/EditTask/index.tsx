import React from "react";

import * as S from './styles';
import { useTheme } from "styled-components/native";

export const EditTask: React.FC = () => {
    const theme = useTheme()
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