import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/RootStack'

function ListJobsScreen () {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const jobs = [
        { id: 1, title: 'Serviço para trocar registro de banheiro' },
        { id: 2, title: 'Troca de resistência de chuveiro' },
        { id: 3, title: 'Necessito de um pedreiro' },
        { id: 4, title: 'Serviço para cortar grama' },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <Pressable style={styles.jobListItem} onPress={() => navigation.navigate('ViewJob')}>
                        <Text>
                            {item.title}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    jobListItem: {
        padding: 4,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
    }
})

export default ListJobsScreen
