import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    // Text,
    ToastAndroid,
    FlatList
} from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

import axios from 'axios';


export default class Positions extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            position_list: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: false });
        axios
            .get('/restaurant/position/list/')
            .then(response => {
                this.setState({
                    loading: false,
                    position_list: response.data
                });
            })
            .catch(error => {
                error_text = "Ha ocurrido un error"
                ToastAndroid.showWithGravityAndOffset(error_text, ToastAndroid.LONG, ToastAndroid.BOTTOM, 0, 50)
            });
    }

    selectedPosition(position_id) {
        console.log(position_id)
    }

    renderItem(data) {
        return (
            <TouchableOpacity onPress={this.selectedPosition.bind(this, data.item.id)}>
                <Card >
                    <CardItem >
                        <Body>
                            <Text>
                                {data.item.description}
                            </Text>
                            <Text style={{}}>{data.item.id} | {data.item.role}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }

    render() {
        console.log("+ Positions +");
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon type="SimpleLineIcons" name='power' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Puestos</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <FlatList
                        data={this.state.position_list}
                        keyExtractor={(item, index) => "POSITION" + item.id.toString()}
                        renderItem={this.renderItem.bind(this)}
                    />

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