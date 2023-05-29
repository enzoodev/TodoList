import React from "react";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import TrashIcon from "../../assets/images/trash.png";
import VectorIcon from "../../assets/images/Vector.png";
import { TaskDTO } from "../../dtos/tasks";

import * as S from "./styles";

type Props = {
  data: {
    item: TaskDTO;
    onEdit: () => void;
    onRemove: () => Promise<void>;
  };
};

const TaskComponent: React.FC<Props> = ({
  data: { item, onEdit, onRemove },
}) => {
  const theme = useTheme();

  return (
    <S.Container onPress={onEdit} activeOpacity={0.6}>
      <S.ButtonComplete isActive={!!item.completed_at}>
        {!!item.completed_at && <VectorIcon />}
      </S.ButtonComplete>
      <S.Content>
        <S.Title>{item.title}</S.Title>
        <S.Subtitle>{item.description}</S.Subtitle>
      </S.Content>
      <S.Content>
        <TouchableOpacity onPress={onEdit}>
          <Feather
            name="edit"
            color={theme.colors.gray300}
            size={RFValue(24)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRemove}>
          <TrashIcon />
        </TouchableOpacity>
      </S.Content>
    </S.Container>
  );
};

export const Task = React.memo(TaskComponent);
