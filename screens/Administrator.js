import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, StatusBar, ToastAndroid } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Thumbnail, Spinner, FlatList } from 'native-base';

export default class Administrator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentDidMount() {
        axios.get('/restaurant/menu/complement/')
            .then(response => {
                this.setState({
                    data: response.data,
                    loading: false
                });
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    render() {
        //const { navigation } = this.props; Really?
        console.log("+ Administrator +");
        const loading = this.state.loading;
        if (loading != true) {
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
                        <Text style={styles.text}>Token: {"\n"}
                            {this.props.navigation.state.params.Token
                                ? this.props.navigation.state.params.Token : 'null'}
                        </Text>
                        <Text style={styles.text}>{`Producto: ${data[0].description} Precio: ${data[0].price}`}</Text>
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
        } else {
            return (
                <Container style={styles.container}>
                    <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                    <Text style={styles.text}>Cargando información</Text>
                    <Spinner color='blue' />
                </Container>
            );
        }
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
        fontSize: 35,
        color: '#3d405b', // white
        marginTop: 30,
        marginLeft: 100,
        marginRight: 100
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