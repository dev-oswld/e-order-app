import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


export default class UpdateMenu extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.barNav}>
                    <Text style={styles.titulo}>ACTUALIZAR MENÚ</Text>
                </View>

                <View style={styles.logo}>
                    <Image source={require("../assets/images/menu.png")} />
                </View>
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                        <Text style={styles.button}>MODIFICAR</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                        <Text style={styles.button}>CREAR</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                        <Text style={styles.button}>ELIMINAR</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                        <Text style={styles.button}>SALIR</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        marginLeft: 20
    },
    button: {
        backgroundColor: '#ff7f50',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 5,
        textAlign: 'center',
        marginTop: 40,
        width: 200
    },
    barNav: {
        backgroundColor: "#ff7f50",
        padding: 15,
        textAlign: 'center',
        overflow: 'hidden',
        width: '100%',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10,
        alignItems: 'center'
    }
});
