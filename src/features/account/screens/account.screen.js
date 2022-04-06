import React from 'react';
import { Spacer } from '../../../components/spacer/Spacer';
import LottieView from 'lottie-react-native';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          source={require('../../../../assets/eat.json')}
          key='animation'
          autoPlay
          loop
          resizeMode='cover'
        />
      </AnimationWrapper>
      <Title>Planet Restro</Title>
      <AccountContainer>
        <AuthButton
          icon='lock-open-outline'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size='large' />
        <AuthButton
          icon='account-clock-outline'
          mode='contained'
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
