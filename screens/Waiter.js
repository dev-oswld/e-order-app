import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

export default class Waiter extends Component {

    render() {
        console.log("+ Waiter +");
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon type="SimpleLineIcons" name='power' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Vista Mesero</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon type="SimpleLineIcons" name='reload' />
                        </Button>
                    </Right>
                </Header>
                <Content /* Footer with badge or Onscroll Tabs? */>
                    <Card /* Example */>
                        <CardItem header bordered>
                        <Thumbnail small source={require("../assets/images/mesero.png")} />
                            <Text>   Ordenes del día</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Número de ordenes: A {"\n"}
                                    Ordenes pedidas: B {"\n"}
                                    Ordenes en proceso: C {"\n"}
                                    Ordenes completadas: D
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Text>Avisos recibidos: 0{"\n"}
                                  Espacios disponibles: E
                            </Text>
                        </CardItem>
                        <CardItem footer bordered button onPress={() => alert("Proximamente")}>
                            <Text>Mostras más</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered button onPress={() => alert("Más contenido pronto")}>
                            <Body>
                                <Text /*Deck Swiper?*/>
                                    Información de utilidad
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text /*Deck Swiper?*/>
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