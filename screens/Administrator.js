//import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Thumbnail } from 'native-base';

export default class Administrator extends Component {

    render() {
        console.log("+ Administrator +");
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon type="SimpleLineIcons" name='power' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Administración</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={styles.content}>
                    <Thumbnail style={styles.image} source={require("../assets/images/administrador.png")} />
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('CREATE', ToastAndroid.SHORT)}>
                        <Text>Mostrar el menú</Text>
                    </Button>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('READ', ToastAndroid.SHORT)}>
                        <Text>Crear nuevo elemento</Text>
                    </Button>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('UPDATE', ToastAndroid.SHORT)}>
                        <Text>Actualizar el menú</Text>
                    </Button>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('DELETE', ToastAndroid.SHORT)}>
                        <Text>Eliminar un elemento</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2cc8f',
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        tintColor: '#3d405b',
        width: 90,
        height: 90,
        marginTop: 15,
        marginLeft: 115,
        marginRight: 115
    },
    button: {
        backgroundColor: '#3d405b',
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35
    }
});