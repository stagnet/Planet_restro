import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { View, Text } from 'react-native';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

import { AuthenticationContext } from '../../services/authentication/auth.context.js';

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppNavigator />
      ) : (
        <AccountNavigator />
        // <SafeArea>
        //   <View>
        //     <Text>Not Authenticated</Text>
        //   </View>
        // </SafeArea>
      )}
    </NavigationContainer>
  );
};
