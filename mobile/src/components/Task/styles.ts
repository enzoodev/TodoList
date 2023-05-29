import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Actived {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(5)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.gray500};
`;

export const Content = styled.View``;

export const Title = styled.Text``;

export const Subtitle = styled.Text``;

export const ButtonComplete = styled.TouchableOpacity<Actived>`
  align-items: center;
  justify-content: center;
  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;
  border-radius: 50%;
  border-width: ${RFValue(2)}px;
  ${({ theme, isActive }) =>
    isActive
      ? css`
          border-color: ${theme.colors.purpleDark};
          background-color: ${theme.colors.purpleDark};
        `
      : css`
          border-color: ${theme.colors.blue};
          background-color: ${theme.colors.gray500};
        `};
`;
