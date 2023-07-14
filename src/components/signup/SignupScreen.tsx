import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import button from '../../styles/button'
import common from '../../styles/common'
import PocketBase from '../../connection/PocketBase'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/RootStack'

function SignupScreen () {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [name, setName] = useState<string | undefined>(undefined)
    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)
    const [passwordConfirm, setPasswordConfirm] = useState<string | undefined>(undefined)

    const isNameValid = !!name
    const isEmailValid = !!email
    const isPasswordValid = !!password
    const isPasswordConfirmValid = passwordConfirm === password

    const canSubmit =
        isNameValid && isEmailValid && isPasswordValid && isPasswordConfirmValid

    const pb = useContext(PocketBase)

    const handleSubmit = async () => {
        if (!canSubmit) return;

        await pb.collection('users').create({ name, email, password, passwordConfirm })
        await pb.collection('users').authWithPassword(email, password)
        navigation.replace('Login')
    }

    return (
        <View style={common.container}>
            <View style={{ width: '90%' }}>
                <Text>Nome</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    autoComplete='name'
                    style={textInput}
                />
                <Text>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoComplete='email'
                    style={textInput}
                />
                <Text>Senha</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    autoComplete='new-password'
                    style={textInput}
                />
                <Text>Confirmar senha</Text>
                <TextInput
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    secureTextEntry={true}
                    autoComplete='new-password'
                    style={textInput}
                />
                <Pressable
                    onPress={handleSubmit}
                    disabled={!canSubmit}
                    style={button.disableable(!canSubmit)}
                >
                    <Text style={common.buttonText}>Cadastrar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const textInput = StyleSheet.compose(common.textInput, common.formSeparated)

export default SignupScreen
