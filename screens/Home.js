import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


export default class Home extends React.Component {

    render() {
        console.log("+++ Inicio +++");
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require("../assets/images/logo.png")} />
                </View>
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.button}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4B666',
        alignItems: 'center'
    },
    logo: {
        //resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#ff7f50',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign: 'center',
        marginTop: 70,
        width: 200
    }
});
