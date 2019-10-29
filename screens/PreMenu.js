import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, Button, Text } from 'native-base';

export default class PreMenu extends Component {

    render() {
        console.log("+ PreMenu : Roles +");
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                <Content>
                    <Thumbnail style={styles.userImage} source={require("../assets/images/content.png")} />
                    <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Administrator')}>
                        <Text>Administración</Text>
                    </Button>
                    <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Client')}>
                        <Text>Cliente</Text>
                    </Button>
                    <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Waiter')}>
                        <Text>Mesero</Text>
                    </Button>
                    <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Chef')}>
                        <Text>Cocinero</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2cc8f',
        alignItems: 'center'
    },
    logo: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: 300,
        height: 300,
        marginTop: 80
    },
    userImage: {
        resizeMode: 'contain',
        justifyContent: 'center',
        tintColor: 'white',
        width: 120,
        height: 120,
        marginTop: 25,
        marginLeft: 110,
        marginRight: 110
    },
    button: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#3d405b'
    }
});