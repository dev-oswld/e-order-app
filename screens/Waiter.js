import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, Thumbnail, Spinner } from 'native-base';

export default class Waiter extends Component {

    showAlert() {
        Alert.alert(
            'Aviso',
            'Vista actualizada',
            [{ text: 'Ok' }]
        )
    }

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
                        <Button transparent onPress={this.showAlert} /*States and child component*/>
                            <Icon type="SimpleLineIcons" name='reload'/*<Spinner color='#3d405b' />*/ />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card /* Example */>
                        <CardItem header bordered>
                            <Thumbnail small source={require("../assets/images/mesero.png")} />
                            <Text>   Ordenes del día</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Text> Mesa 1. {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Text> Mesa 2. {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Text> Mesa 3. {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container >
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