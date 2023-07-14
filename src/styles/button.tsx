import { PressableStateCallbackType, StyleProp, StyleSheet } from 'react-native'

const pressable = ({ pressed }: PressableStateCallbackType) => ({
    padding: 10,
    backgroundColor: pressed ? '#9D8CF7' : '#7358EE',
    borderRadius: 8,
})

/* const disableable: (disabled: boolean) => typeof pressable =
    disabled => (...args) => {
        const style = pressable(...args)
        return disabled
            ? { ...style, backgroundColor: '#505050' }
            : style
    } */
const disableable =
    (disabled: boolean): typeof pressable => (...args) => {
        const style = pressable(...args)
        return disabled
            ? { ...style, backgroundColor: '#505050' }
            : style
    }

export default { pressable, disableable }
