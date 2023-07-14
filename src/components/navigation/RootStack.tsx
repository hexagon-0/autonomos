import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Title: undefined,
    Login: undefined,
    Signup: undefined,
    Home: undefined,
    ViewJob: undefined,
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default RootStack
