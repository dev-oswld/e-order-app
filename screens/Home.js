import React from 'react';
import { Alert, StyleSheet, View, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Welcome to my Home"
                    color= "#ffa07a"
                    onPress={() =>
                        this.props.navigation.navigate('Door')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4a460',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
