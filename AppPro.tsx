import React from "react";

import { SafeAreaView ,View, Text,useColorScheme, StyleSheet } from "react-native";

function AppPro() : JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style={styles.container}>
            <Text style = {isDarkMode ? styles.whiteText : styles.darktext}>Hello World</Text>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    whiteText:{
        color:'white',
        backgroundColor:'black',
    },
    darktext:{
        color:'black',
        backgroundColor:'white',
    }
})
export default AppPro;