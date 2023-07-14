import React, { useContext } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import PocketBase from "../../connection/PocketBase"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/RootStack"
import button from "../../styles/button"
import common from "../../styles/common"

function ProfileScreen () {
    const pb = useContext(PocketBase)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const handleLogout = () => {
        pb.authStore.clear()
        if (navigation.canGoBack()) {
            navigation.popToTop()
        } else {
            navigation.replace('Title')
        }
    }

    return (
        <View style={[common.container, { height: 'auto' }]}>
            <Text style={styles.nameText}>{pb.authStore.model?.name}</Text>
            <View style={styles.statsContainer}>
                <Text>Oportunidades: XXX</Text>
                <Text>Candidatou-se: XXX</Text>
                <Text>Visualizações: XXX</Text>
            </View>
            <Pressable
                onPress={handleLogout}
                style={(...args) => [button.pressable(...args), styles.logoutButton]}
            >
                <Text style={common.buttonText}>Sair da conta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    nameText: {
        fontSize: 24,
        margin: 24,
    },
    statsContainer: {
        alignItems: "center"
    },
    logoutButton: {
        width: '90%',
        marginTop: 24,
    },
})

export default ProfileScreen
