import React, { useContext, useState } from 'react';

import { Button } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from '../components/account.styles';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/Spacer';
import { AuthenticationContext } from '../../../services/authentication/auth.context';

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  // console.log(error);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>

      <AccountContainer>
        <AuthInput
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size='large'>
          <AuthInput
            label='password'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        <Spacer size='large'>
          <AuthInput
            label='Repeat password'
            value={repeatedPassword}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            onChangeText={(u) => setRepeatedPassword(u)}
          />
        </Spacer>
        {error && (
          <Spacer size='medium'>
            <ErrorContainer>
              <Text variant='error'>{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        {!isLoading ? (
          <Spacer size='medium'>
            <AuthButton
              icon='email'
              mode='contained'
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          </Spacer>
        ) : (
          <ActivityIndicator
            style={{ marginTop: 10 }}
            animating={true}
            color='#5f27cd'
          />
        )}
      </AccountContainer>
      <Spacer size='medium'>
        <Button
          color='black'
          shouldRasterizeIOS
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </Spacer>
    </AccountBackground>
  );
};
