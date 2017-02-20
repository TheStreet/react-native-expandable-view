import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native';

import ExpandableView from 'react-native-expandable-view';

export default class ExpandableViewExample extends React.Component {
    render() {
        return (
            <ScrollView>
                <ExpandableView
                    text='Tap to expand box'
                >
                    <View style={styles.redBox}>
                        <Text>
                            A box that can be expanded
                        </Text>
                    </View>
                </ExpandableView>
                <View style={styles.blueBox}>
                    <Text>
                        A box that can't be expanded
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    redBox: {
        paddingTop: 50,
        minHeight: 600,
        backgroundColor: 'red'
    },
    blueBox: {
        paddingTop: 50,
        minHeight: 300,
        backgroundColor: 'blue'
    }
});