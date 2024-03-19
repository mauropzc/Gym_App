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
            >Iniciar Sesion</Text>
        </TouchableOpacity>
            
    )

}

const styles = StyleSheet.create({
    
    button: {
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 15,
        width: '95%'
    },
    buttonText: {
        textAlign: 'center'
    }
})