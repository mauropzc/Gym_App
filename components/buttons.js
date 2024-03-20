import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function Button_login() {
    return (
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#2196f3'
            }}
        >  
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#f1f1f1'
                }}
            >Log in</Text>
        </TouchableOpacity>
            
    )

}

const styles = StyleSheet.create({
    
    button: {
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 15,
<<<<<<< HEAD
        width: '90%',
        margin: 20
=======
        width: '95%'
>>>>>>> parent of d145acb (commit login diseñado)
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20
    }
})