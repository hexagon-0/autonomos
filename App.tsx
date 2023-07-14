/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import TitleScreen from './src/components/title/TitleScreen'
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from './src/components/login/LoginScreen'
import RootStack from './src/components/navigation/RootStack'
import SignupScreen from './src/components/signup/SignupScreen'
import ProfileScreen from './src/components/profile/ProfileScreen'

function App () {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Title" options={{ header: () => null }} component={TitleScreen} />
        <RootStack.Screen name="Login" options={{ title: 'Entrar' }} component={LoginScreen} />
        <RootStack.Screen name="Signup" options={{ title: 'Cadastrar' }} component={SignupScreen} />
        <RootStack.Screen name="Profile" options={{ title: 'Perfil' }} component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
