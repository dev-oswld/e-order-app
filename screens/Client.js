import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, List, ListItem, Separator, Thumbnail } from 'native-base';

export default class Client extends Component {
    /* constructor(props) {
         super(props);
         this.back_Button_Press = this.back_Button_Press.bind(this);
     }
 
     componentDidMount() {
         BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
     }
 
     back_Button_Press = () => {
         Alert.alert(
             'Aviso importante',
             '¿Deseas cerrar la sesión?',
             [
                 { text: 'Si', onPress: () => this.props.navigation.navigate('Login') },
                 { text: 'No', onPress: () => console.log('Live') }
             ],
             { cancelable: false },
         );
         return true;
     }*/

    render() {
        console.log("+ Client +");
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={this.back_Button_Press}>
                            <Icon type="SimpleLineIcons" name='power' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Vista Cliente</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon type="SimpleLineIcons" name='info' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Separator bordered>
                        <Text style={{ fontSize: 18, color: 'blue' }}>Menu del día</Text>
                    </Separator>
                    <List style={styles.list} /* Static list */>
                        <ListItem>
                            <Left>
                                <Thumbnail small source={require("../assets/images/platofuerte.png")} />
                                <Text>   Platillo principal</Text>
                            </Left>
                            <Right>
                                <Icon type="SimpleLineIcons" name='arrow-right-circle' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Thumbnail small source={require("../assets/images/primerplato.png")} />
                                <Text>   Platillo de entrada</Text>
                            </Left>
                            <Right>
                                <Icon type="SimpleLineIcons" name='arrow-right-circle' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Thumbnail small source={require("../assets/images/postre.png")} />
                                <Text>   Postres</Text>
                            </Left>
                            <Right>
                                <Icon type="SimpleLineIcons" name='arrow-right-circle' />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Thumbnail small source={require("../assets/images/bebidas.png")} />
                                <Text>   Bebidas</Text>
                            </Left>
                            <Right>
                                <Icon type="SimpleLineIcons" name='arrow-right-circle' />
                            </Right>
                        </ListItem>
                    </List>
                    <Card /* Example */>
                        <CardItem header bordered>
                            <Text>Otros</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>Hacer encuesta del servicio</Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Text>Quejas y sugerencias</Text>
                        </CardItem>
                        <CardItem footer bordered button onPress={() => alert("Proximamente")}>
                            <Text>Mostras más</Text>
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
        backgroundColor: '#f2cc8f'
    },
    list: {
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: 'white'
    }
});