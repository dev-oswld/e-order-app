import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

export default class MenuTabOne extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                <Content>
                    <Text>1 1 1</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2cc8f',
        alignItems: 'center'
    }
});