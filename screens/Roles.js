import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';


export default class Roles extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.barNav}>
                    <Text style={styles.titulo}>ROLES</Text>
                </View>
                
                <View style={styles.seccion}>
                    <View style={styles.rows}>
                        <View style={styles.cols}>
                            <Image style={styles.img} source={require("../assets/images/administrador.png")} />
                            <View >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                                    <Text style={styles.button}>ADMINISTRADOR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.cols}>
                            <Image style={styles.img} source={require("../assets/images/mesero.png")} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                                <Text style={styles.button}>MESERO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.rows2}>
                        <View style={styles.cols} >
                            <Image style={styles.img} source={require("../assets/images/cocinero.png")} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
                                <Text style={styles.button}>CHEF</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cols} >
                            <Image style={styles.img} source={require("../assets/images/usuarios.png")} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainUser')}>
                                <Text style={styles.button}>CLIENTE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.btnSalir} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
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
    },
    seccion: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    rows: {
        flex: 0.7,
        flexDirection: 'row',
        marginTop: 10
    },
    rows2: {
        flex: 0.7,
        flexDirection: 'row',
        marginTop: 50
    },
    cols: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    img: {
        width: 150,
        height: 150
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
        marginTop: 15,
        width: 160
    },
    btnSalir: {
        marginTop: 50
    }
});