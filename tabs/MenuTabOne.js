import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ToastAndroid, SafeAreaView, FlatList } from 'react-native';
import { Body, Content, Text, Card, CardItem } from 'native-base';

export default class MenuTabOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data_menu: []
        };
    }

    componentDidMount() {
        const session_key = 'VS_b4ce81f6-ddd0-485a-9167-3d93c0acba43'; //Test
        axios.get(`/alternative_session/${session_key}/space/menu/`)
            .then(response => {
                this.setState({
                    loading: false,
                    data_menu: response.data
                });
            })
            .catch(error => {
                console.log(error.response);
                ToastAndroid.showWithGravityAndOffset('Error al cargar los datos', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 50);
            });
    }

    selectedPosition(position_id) {
        console.log(position_id);
    }

    renderItem(data) { // Oscar code (Example)
        return (
            <SafeAreaView>
                <TouchableOpacity onPress={this.selectedPosition.bind(this, data.item.id)}>
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Text>{data.item.description}</Text>
                                <Text>ID: {data.item.menuarticle_set.id}</Text>
                                <Text>Nombre: {data.item.menuarticle_set.name}</Text>
                                <Text>Detalles: {data.item.menuarticle_set.description}</Text>
                                <Text>$ {data.item.menuarticle_set.price}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    render() {
        return (
            <Content styles={styles.contentList}>
                <FlatList
                    data={this.state.data_menu}
                    keyExtractor={(item, index) => "POSITION" + item.id.toString()}
                    renderItem={this.renderItem.bind(this)} />
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2cc8f',
        alignItems: 'center'
    },
    contentList: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor: '#f2cc8f',
    }
});