import { StyleSheet, Image, } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet-forked'

export const testAlert = () => {
    alert('123')
}

//传入px
export const SV = (value) => {
    if (!value) {
        return 0
    }
    if (typeof value == 'number') {
        return EStyleSheet.value(`${value}px`)
    }
    return EStyleSheet.value(`${value}`)
}