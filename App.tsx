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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurriculumScreen from './src/components/curriculum/CurriculumScreen'
import ListJobsScreen from './src/components/list_jobs/ListJobsScreen'
import ViewJobScreen from './src/components/view_job/ViewJobScreen'
import ContactsScreen from './src/components/contacts/ContactsScreen'
import CreateJobScreen from './src/components/create_job/CreateJobScreen'

type HomeTabParamList = {
  Profile: undefined,
  Curriculum: undefined,
  ListJobs: undefined,
  Contacts: undefined,
  CreateJob: undefined,
}

const Tab = createBottomTabNavigator<HomeTabParamList>()

function HomeScreen () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" options={{ title: 'Perfil' }} component={ProfileScreen} />
      <Tab.Screen name="Curriculum" options={{ title: 'Currículo' }} component={CurriculumScreen} />
      <Tab.Screen name="ListJobs" options={{ title: 'Vagas' }} component={ListJobsScreen} />
      <Tab.Screen name="Contacts" options={{ title: 'Contatos' }} component={ContactsScreen} />
      <Tab.Screen name="CreateJob" options={{ title: 'Cadastrar vaga' }} component={CreateJobScreen} />
    </Tab.Navigator>
  )
}

function App () {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Title" options={{ header: () => null }} component={TitleScreen} />
        <RootStack.Screen name="Login" options={{ title: 'Entrar' }} component={LoginScreen} />
        <RootStack.Screen name="Signup" options={{ title: 'Cadastrar' }} component={SignupScreen} />
        <RootStack.Screen name="Home" options={{ header: () => null }} component={HomeScreen} />
        <RootStack.Screen name="ViewJob" options={{ title: 'Informações sobre a vaga' }} component={ViewJobScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
