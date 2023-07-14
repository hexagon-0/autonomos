import { useContext, useEffect } from "react"
import PocketBase from "../../connection/PocketBase"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "./RootStack"

export function useAuthRedirect () {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const pb = useContext(PocketBase)
    const userId = pb.authStore.model?.id

    useEffect(() => {
        if (userId) {
            navigation.replace('Home')
        }
    }, [userId])
}
