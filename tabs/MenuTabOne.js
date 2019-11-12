import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
//import { Container, Content, CardItem, Body, Text, List } from 'native-base';

export default class MenuTabOne extends Component {
    /*constructor(props) {
        super(props);
        const spaceKey = {
            "spaceKey": 'S_70f6cb48-9609-4641-b2e7-af242d4968b0'
        }
       
    }*/

    state = {
        data: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => { //Bad example
        const response = await fetch("https://randomuser.me/api?results=10");
        const json = await response.json();
        this.setState({ data: json.results });
    };

    render() {
        return (


            <View>


                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text>
                            {`${item.name.first} ${item.name.last}`}
                        </Text>}
                />
            </View>
            /*<Container style={styles.container}>
           <Content style={styles.content}>   
           </Content>
       </Container>*/
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