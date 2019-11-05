import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, View, DeckSwiper, Button, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

const orders = [
    {
        place: 'Mesa 1',
        name: 'Platillo X',
        status: 'En proceso',
        image: require('../assets/images/platofuerte.png'),
    },
    {
        place: 'Mesa 2',
        name: 'Platillo Y',
        status: 'En proceso',
        image: require('../assets/images/postre.png'),
    },
];


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
                    <Right />
                </Header>
                <Content>
                    <Card /* Optimize this */>
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
                    <View style={{ height: 450 }}>
                        <DeckSwiper /*Swipe Deck with callback function ?*/
                            dataSource={orders}
                            renderItem=
                            { item =>
                                <Card style={styles.card}>
                                    <CardItem style={styles.subcard}>
                                        <Left>
                                            <Thumbnail square style={{ tintColor: 'white' }} source={require("../assets/images/espacios.png")} />
                                            <Body>
                                                <Text style={{ color: 'white' }}>{item.place}</Text>
                                                <Text note>{item.status}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image style={{ flex: 1, height: 250 }} source={item.image} />
                                    </CardItem>
                                    <CardItem style={{ backgroundColor: '#afb2ca' }}>
                                        <Icon type="SimpleLineIcons" name='check' style={{ color: 'green' }} />
                                        <Text style={{ color: 'white' }}>{item.name}</Text>
                                    </CardItem>
                                </Card>
                            }
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2cc8f'
    },
    card: {
        elevation: 5
    },
    subcard: {
        backgroundColor: '#3d405b'
    }
});