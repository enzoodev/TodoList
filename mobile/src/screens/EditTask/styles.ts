import styled from "styled-components/native";

type InputTypeStyleProps = {
    isActive: boolean;
  }
  

export const InputParticipant = styled.TextInput<InputTypeStyleProps>`
  width: 82%;
  padding: 0 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.gray500};
  font: 15px ${({ theme }) => theme.fonts.family.regular};
  border: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme.colors.purpleDark}` : "none"};
`;
