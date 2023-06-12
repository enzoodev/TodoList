import { useState, useCallback } from "react";
import {
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  RefreshControl,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { AxiosResponse } from "axios";

import { api } from "@services/api";
import { TaskDTO } from "@dtos/tasks";
import { Task } from "@components/Task";

import * as S from "./styles";

/*
      <S.ButtonAdd>
        <Ionicons name="add-circle-outline" color={theme.colors.gray100} size={RFValue(20)} />
      </S.ButtonAdd>
*/

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState([{} as TaskDTO]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const theme = useTheme();

  const handleUpdateTask = useCallback((item: TaskDTO) => {}, []);

  const handleDeleteTask = useCallback(async (id: string) => {}, []);

  const renderItem: ListRenderItem<TaskDTO> = ({ item }) => (
    <Task
      data={{
        item,
        onEdit: () => handleUpdateTask(item),
        onRemove: () => handleDeleteTask(item.id),
      }}
    />
  );

  const keyExtractor = (item: TaskDTO) => String(item.id);

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data }: AxiosResponse<TaskDTO[]> = await api.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRefetchTasks = useCallback(async () => {
    try {
      setIsFetching(true);

      const { data }: AxiosResponse<TaskDTO[]> = await api.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  return (
    <S.Container>
      <S.Header>
        <S.Rocket source={require("@assets/images/rocket.png")} />
        <S.TitleOne>to</S.TitleOne>
        <S.TitleTwo>do</S.TitleTwo>
      </S.Header>

      <S.Content>
        <FlatList
          data={tasks}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={isFetching} onRefresh={handleRefetchTasks} />}
          ListEmptyComponent={
            <S.ListEmpty>
              <Image
                source={require("../../assets/images/Clipboard.png")}
                style={{ marginBottom: RFValue(30) }}
              />
              <S.ListEmptyText>
                Você ainda não tem tarefas cadastradas
              </S.ListEmptyText>
              <S.ListEmptyText>
                Crie tarefas e organize seus itens a fazer
              </S.ListEmptyText>
            </S.ListEmpty>
          }
        />
      </S.Content>
    </S.Container>
  );
};
