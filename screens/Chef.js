import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

export default class Chef extends Component {

    render() {
        console.log("+ Chef +");
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon type="SimpleLineIcons" name='power' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Vista Cocinero</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon type="SimpleLineIcons" name='note' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card /* Example */>
                        <CardItem header bordered>
                            <Thumbnail small source={require("../assets/images/chef.jpg")} />
                            <Text>   Menú del día</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Platillos más pedido: A{"\n"}
                                    Bedidas más pedidas: B
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Text>Ordenes completadas: 0{"\n"}
                                  Ordenes en proceso: 0
                            </Text>
                        </CardItem>
                        <CardItem footer bordered button onPress={() => alert("Proximamente")}>
                            <Text>Avisos del día</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered button onPress={() => alert("Más contenido pronto")}>
                            <Body>
                                <Text>
                                    Bitacora de cocina
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