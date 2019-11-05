import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

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
                        <Title>Vista Administrador</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card /* Example */>
                        <CardItem header bordered>
                        <Thumbnail small square source={require("../assets/images/administrador.png")} />
                            <Text>   Sucursal ABC</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Platillos vendidos: A{"\n"}
                                    Espacios disponibles: B
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Text>Retroalimentación recibidas: 0{"\n"}
                                Avisos: 0
                            </Text>
                        </CardItem>
                        <CardItem footer bordered button onPress={() => alert("Proximamente")}>
                            <Text>Modificar Menú del día</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered button onPress={() => alert("Más contenido pronto")}>
                            <Body>
                                <Text>
                                    Configuración de la Sucursal
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Más contenido...{"\n"}
                                    Más contenido...
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
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
    }
});