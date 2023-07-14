import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import button from '../../styles/button'
import common from '../../styles/common'
import PocketBase from '../../connection/PocketBase'
import { useAuthRedirect } from '../navigation/auth_redirect'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/RootStack'

function LoginScreen () {
    useAuthRedirect()

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    const isEmailValid = !!email
    const isPasswordValid = !!password

    const canSubmit = isEmailValid && isPasswordValid

    const pb = useContext(PocketBase)

    const handleSubmit = async () => {
        if (!canSubmit) return

        await pb.collection('users').authWithPassword(email, password)
        navigation.replace('Home')
    }

    return (
        <View style={common.container}>
            <View style={{ width: '90%' }}>
                <Text>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    autoComplete='email'
                    style={textInput}
                />
                <Text>Senha</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoComplete='current-password'
                    style={textInput}
                />
                <Pressable
                    onPress={handleSubmit}
                    disabled={!canSubmit}
                    style={button.disableable(!canSubmit)}
                >
                    <Text style={common.buttonText}>Entrar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const textInput = StyleSheet.compose(common.textInput, common.formSeparated)

export default LoginScreen
