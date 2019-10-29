import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Label } from 'native-base';

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
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon type="SimpleLineIcons" name='options-vertical' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Label>Administrator//Administrador</Label>
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