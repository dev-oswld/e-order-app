import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

export default class MenuTabTwo extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                <Content style={styles.content}>

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
    },
    content: {
        alignSelf: 'stretch'
    }
});