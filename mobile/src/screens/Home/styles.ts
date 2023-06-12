import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Rocket = styled.Image`
  margin-right: ${RFValue(5)}px;
`;

export const Header = styled.View`
  height: ${RFValue(150)}px;
  flex-direction: row;
  justify-content: center;
  justify-content: center;
`;

export const TitleOne = styled.Text`
  font: ${RFValue(30)}px ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.blue};
`;

export const TitleTwo = styled.Text`
  font: ${RFValue(30)}px ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.purpleDark};
`;

export const ListEmpty = styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const ListEmptyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-family: ${({ theme }) => theme.fonts.sizes.md}px;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blueDark};
`;