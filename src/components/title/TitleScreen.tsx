import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ButtonList from "./ButtonList"
import commonStyles from "../../styles/common"
import { useAuthRedirect } from "../navigation/auth_redirect"

function TitleScreen () {
    useAuthRedirect()

    return (
        <View style={commonStyles.container}>
            <Text style={styles.title}>Logo</Text>
            <ButtonList />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        marginBottom: 16,
    },
})

export default TitleScreen
