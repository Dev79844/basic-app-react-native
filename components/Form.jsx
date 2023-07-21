import React from 'react'
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

const Form = () => {

    const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello, World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    whiteText:{
        color: 'white'
    },
    blackText:{
        color: 'black'
    }
})

export default Form