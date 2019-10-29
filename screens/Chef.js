import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Label } from 'native-base';

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
                    <Label>Chef//Cocinero</Label>
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