import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, CardItem, Body, Text, List } from 'native-base';

export default class MenuTabOne extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: []
    };

    componentDidMount() {

    }

    render() {
        return (
            <Container style={styles.container}>
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
        flex: 2,
        flexDirection: 'column',
        alignSelf: 'center'
    }
});