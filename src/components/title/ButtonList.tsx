import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/RootStack'
import button from '../../styles/button'
import common from '../../styles/common'

function ButtonList () {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.buttonList}>
            <Pressable
                style={(...args) => [button.pressable(...args), styles.button]}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={buttonText}>Entrar</Text>
            </Pressable>
            <Pressable
                style={(...args) => [button.pressable(...args), styles.button]}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={buttonText}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        width: 200,
    },
    buttonText: {
        fontSize: 18,
    },
    button: {
        marginTop: 4,
        marginBottom: 4,
    },
})

const buttonText = StyleSheet.compose(common.buttonText, styles.buttonText)

export default ButtonList
