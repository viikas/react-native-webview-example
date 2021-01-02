import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export default class LoadingOverlay extends Component {

    constructor(props) {
        super(props);
        this.loadingText = 'Loading Please Wait ..';
    }

    render() {
        return (
            <View style={styles.overlay}>
                <Text style={styles.text}>{this.loadingText}</Text>
                <ActivityIndicator
                    animating={this.props.animating}
                    style={styles.activityIndicator}
                    size="large"
                    color='#fff'
                />
            </View>
        );
    }
}