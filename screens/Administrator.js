import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, StatusBar, ToastAndroid } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Thumbnail, Spinner, FlatList, Card, CardItem } from 'native-base';

export default class Administrator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const { navigation } = this.props; Really?
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
                    <Text numberOfLines={1} style={styles.text}>
                        Token: {this.props.navigation.state.params.Token ? this.props.navigation.state.params.Token : 'null'}
                    </Text>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Positions')}>
                        <Text>Puestos actuales</Text>
                    </Button>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('READ', ToastAndroid.SHORT)}>
                        <Text> </Text>
                    </Button>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('UPDATE', ToastAndroid.SHORT)}>
                        <Text> </Text>
                    </Button>
                    <Button
                        block rounded large
                        style={styles.button}
                        onPress={() => ToastAndroid.show('DELETE', ToastAndroid.SHORT)}>
                        <Text> </Text>
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
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginTop: 30,
        marginLeft: 70,
        marginRight: 70
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        tintColor: '#3d405b',
        width: 90,
        height: 90,
        marginTop: 10,
        marginLeft: 150,
        marginRight: 150
    },
    button: {
        backgroundColor: '#3d405b',
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35
    }
});