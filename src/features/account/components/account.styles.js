import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from '../../../infrasturcture/theme/colors';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.28);
`;

export const AccountContainer = styled.View`
  background-color: rgba(29, 209, 161, 0.2);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: rgba(48, 51, 107, 1);
  font-family: ${(props) => props.theme.fonts.monospace};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
